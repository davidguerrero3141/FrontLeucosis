import { UserService } from './../../../Services/user.service';
import { Router } from '@angular/router';
import { sha1 } from './../../../../../node_modules/js-sha1/index.d';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  formGroup: FormGroup
  submitted = false;


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userServices: UserService
    ){

    this.formGroup = this.formBuilder.group({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      tipoId: new FormControl('', [Validators.required]),
      numId: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      password2: new FormControl('', [Validators.required]),
      FechaN: ['', [
        Validators.required,
        // validates date format yyyy-mm-dd with regular expression
        Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)
    ]]
    })

  }

  ngOnInit (): void {

  }

  registro () {

      if (this.formGroup.valid) {
        if (
          this.formGroup.value.password == this.formGroup.value.password2
        ) {

          let obj = {
            name: this.formGroup.value.nombre,
            lastName: this.formGroup.value.apellido,
            userName: this.formGroup.value.username,
            typeId: this.formGroup.value.tipoId,
            identificationNumber: this.formGroup.value.numId,
            birthDate: this.formGroup.value.FechaN,
            telephone: this.formGroup.value.telefono,
            address: this.formGroup.value.direccion,
            email: this.formGroup.value.email.toLowerCase(),
            password: this.formGroup.value.password,
            state: true
          }
          console.log(obj)
          this.userServices
            .registry_client(obj)
            .subscribe(
              res => {
                Swal.fire({
                  icon: 'success',
                  title: 'Creado correctamente'
                })
                this.router.navigate(['/user'])
              },
              err => {
                if (err.error.status == 500) {
                  Swal.fire({
                    icon: 'warning',
                    title: 'Datos duplicados',
                    text: 'Algunos campos ya se han registrado con estos datos'
                  })
                }
                if (err.error.status == 401) {
                  Swal.fire({
                    icon: 'warning',
                    title: 'Error en la peticion',
                    text: 'Error en el servicio de registro',
                    showConfirmButton: true,
                    confirmButtonText: 'Ir'
                  })
                }
              }
            )
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Validacion',
            confirmButtonText: 'Verificar',
            confirmButtonColor: '#3F51B5',
            text: 'La contraseña no coincide!'
          })
        }
      } else {
        Swal.fire({
          icon: 'warning',
          title: 'Campos requeridos',
          text: 'Se deben diligenciar todos los campos.'
        })
      }
  }
}

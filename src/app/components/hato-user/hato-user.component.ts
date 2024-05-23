import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import Swal from 'sweetalert2';
import { BovineService } from '../../Services/bovines/bovine.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-hato-user',
  templateUrl: './hato-user.component.html',
  styleUrls: ['./hato-user.component.css'],
  providers: [MessageService]
})
export class HatoUserComponent implements OnInit {
  formGroup: FormGroup;
  formGroupevent: FormGroup;
  formGroupInsem: FormGroup;
  FormGroupExpo: FormGroup;

  currentBovine: any;
  bovines!: any[];
  visibleadd: boolean = false;
  visibleevent: boolean = false;
  visiblesale: boolean = false;
  visibleinsem: boolean =  false;
  visibleExpos: boolean = false;


  showDialogadd() {
      this.visibleadd = true;
  }

  closeDialogadd() {
      this.visibleadd = false;
  }

  showDialogevent(bovine: any) {
    this.currentBovine =bovine;
    this.visibleevent = true;
}

closeDialogevent() {
    this.visibleevent = false;
}

showDialogSale() {
  this.visiblesale = true;
}

closeDialogSale() {
  this.visiblesale = false;
}

showDialogInsem(bovine: any) {
  this.currentBovine =bovine;
  this.visibleinsem = true;
}

closeDialogInsem() {
  this.visibleinsem = false;
}

showDialogExpo() {
  this.visibleExpos= true;
}

closeDialogExpo() {
  this.visibleExpos = false;
}


  ngOnInit (): void {
    this.BovineService.getAllBovines().subscribe((data) => {
      this.bovines = data.body;

      console.log(this.bovines);
  });
  }

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private BovineService: BovineService,
    private messageService: MessageService
  ){
    this.formGroup = this.formBuilder.group({
      nombre: new FormControl('', [Validators.required]),
      raza: new FormControl('', [Validators.required]),
      genero: new FormControl('', [Validators.required]),
      años: new FormControl('', [Validators.required]),
      meses: new FormControl('', [Validators.required]),
      propiedad: new FormControl('', [Validators.required]),
      FechaN: ['', [
        Validators.required,
        // validates date format yyyy-mm-dd with regular expression
        Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)
    ]]
    })

    this.formGroupevent = this.formBuilder.group({
      tiposup: new FormControl('', [Validators.required]),
      nombrefar: new FormControl('', [Validators.required]),
      dosis: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      instrumento: new FormControl('', [Validators.required]),
      madeBy: new FormControl('', [Validators.required]),
      Fechasuministrado: ['', [
        Validators.required,
        // validates date format yyyy-mm-dd with regular expression
        Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)
    ]]
    })

    this.formGroupInsem = this.formBuilder.group({
      realizo: new FormControl('', [Validators.required]),
      observaciones: new FormControl('', [Validators.required]),
      instrumentoind: new FormControl('', [Validators.required]),
      semencer: new FormControl('', [Validators.required]),
      motadirecta: new FormControl('', [Validators.required]),
      Fechainseminacion: ['', [
        Validators.required,
        // validates date format yyyy-mm-dd with regular expression
        Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)
    ]]
    })

    this.FormGroupExpo = this.formBuilder.group({
      nombre: new FormControl('', [Validators.required]),
      raza: new FormControl('', [Validators.required]),
      genero: new FormControl('', [Validators.required]),
      años: new FormControl('', [Validators.required]),
      meses: new FormControl('', [Validators.required]),
      propiedad: new FormControl('', [Validators.required]),
      FechaN: ['', [
        Validators.required,
        // validates date format yyyy-mm-dd with regular expression
        Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)
    ]]
    })

  }


  registro() {

    if (this.formGroup.valid) {

      let owntem = true;
      if(this.formGroup.value.propiedad == "false"){
        owntem = false
      }

        let obj = {

          nameBovine: this.formGroup.value.nombre,
          race: this.formGroup.value.raza,
          gender: this.formGroup.value.genero,
          years: this.formGroup.value.años,
          months: this.formGroup.value.meses,
          birthDate: this.formGroup.value.FechaN,
          own: owntem,
          liveState: true
        }
        console.log(obj)
        this.BovineService
          .addBovine(obj)
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
        icon: 'warning',
        title: 'Campos requeridos',
        text: 'Se deben diligenciar todos los campos.'
      })
    }
}

AddEventVeterinary() {

  if (this.formGroupevent.valid) {

    let owntem = true;
    if(this.formGroup.value.propiedad == "false"){
      owntem = false
    }

      let obj = {

        dateRecord: this.formGroupevent.value.Fechasuministrado,
        typeSupplies: this.formGroupevent.value.tiposup,
        nameSupplies: this.formGroupevent.value.nombrefar,
        doseSupplied: this.formGroupevent.value.dosis,
        description: this.formGroupevent.value.descripcion,
        individualInstrument: this.formGroupevent.value.instrumento,
        madeBy: this.formGroupevent.value.madeBy,
        idBovine: this.currentBovine.idBovine
      }
      this.BovineService
        .addVetgerinaryRecordBovine(obj)
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
      icon: 'warning',
      title: 'Campos requeridos',
      text: 'Se deben diligenciar todos los campos.'
    })
  }
}

AddInsemination() {

  if (this.formGroupInsem.valid) {

    let owntem = true;
    if(this.formGroupInsem.value.propiedad == "false"){
      owntem = false
    }

      let obj = {

        dateInsemination: this.formGroupInsem.value.Fechainseminacion,
        certifiedSemen: this.formGroupInsem.value.semencer,
        directMount: this.formGroupInsem.value.motadirecta,
        observations: this.formGroupInsem.value.observaciones,
        individualInstrument: this.formGroupInsem.value.instrumentoind,
        madeBy: this.formGroupInsem.value.realizo,
        idBovine: this.currentBovine.idBovine
      }

      console.log(obj)
      this.BovineService
        .addInseminationBovine(obj)
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
      icon: 'warning',
      title: 'Campos requeridos',
      text: 'Se deben diligenciar todos los campos.'
    })
  }
}


selectProduct(product: any) {
  this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: product.nameBovine });
}
}

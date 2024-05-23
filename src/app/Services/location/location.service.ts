import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

 public location?:[number, number];



  constructor() {
    this.getlocationcurrent();
  }

  public async getlocationcurrent():Promise<[number, number]>{
    return new Promise((resolve, reject) =>{
      navigator.geolocation.getCurrentPosition(
        ({coords})=>{
          this.location = [coords.longitude, coords.latitude];
          resolve(this.location)
        }, (err)=>{
          alert('No es posible obtener la localizacion');
          reject();
        }
      )
    })
  }
}

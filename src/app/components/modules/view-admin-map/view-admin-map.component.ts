import { LocationService } from 'src/app/Services/location/location.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import Mapboxgl, { Marker, Popup } from 'mapbox-gl';
import { MapService } from 'src/app/Services/map/map.service';
import { LandService } from '../../../Services/land/land.service';
import { AreaRiskService } from '../../../Services/AreaRisk/area-risk.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import {Router} from '@angular/router';

@Component({
  selector: 'app-view-admin-map',
  templateUrl: './view-admin-map.component.html',
  styleUrls: ['./view-admin-map.component.css']
})
export class ViewAdminMapComponent implements OnInit{

  lands!: any[];
  areasRisk!: any[];

  addAreaRiskA: boolean = false;
  visibleaddRisk: boolean = false;
  formGroup: FormGroup;

  constructor(private router:Router, private formBuilder: FormBuilder, private locationService: LocationService,private areaRiskService: AreaRiskService, private mapServices: MapService, private landService: LandService){

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
  }

  ngOnInit(): void {

    Mapboxgl.accessToken = environment.mapboxKey;


    const map = new Mapboxgl.Map({
      container: 'mapa-Admin-mapbox', // container ID
      style: 'mapbox://styles/mapbox/outdoors-v12', // style URL
      center: [-73.3590799, 5.5420138], // starting position [lng, lat]
      zoom: 10, // starting zoom
      });

      map.on('click', (e) => {
        console.log("Latitude: " + e.lngLat.lat + " Longitude: " + e.lngLat.lng);

       const popup = new Popup()
                .setLngLat([e.lngLat.lat, e.lngLat.lng])
                .setHTML(`
                <H6>$Agregar Nuevo:</H6>
                <button type="button" class="btn btn-primary">Area de riesgo</button>
                `)
                .addTo(map);


         const markermap = new Marker({color: 'blue'}).setLngLat([e.lngLat.lng, e.lngLat.lat]).setPopup(popup).addTo(map);

         this.showDialogadd();

      });

      this.landService.getAllLands().subscribe((data) => {
        this.lands = data.body;

        this.lands.forEach(land => {
          if(!land.presenceLeucosis){
            const popup = new Popup().setHTML(`
            <H6>${land.nameLand}</H6>
            <span>${land.user.name} ${land.user.lastName}</sapan>
            <H6>No hay registros de contagio en esta finca</H6>
            <button type="button" class="btn btn-primary">Ver</button>
            `);
              new Marker({color: 'green'}).setLngLat([land.longitude, land.latitude]).setPopup(popup).addTo(map);
          }else{
            const popup = new Popup().setHTML(`
            <H6>${land.nameLand}</H6>
            <span>${land.user.name} ${land.user.lastName}</sapan>
            <H6>Se presentan contagios en esta finca</H6>
            <button type="button" class="btn btn-primary">Ver</button>
            `);
              new Marker({color: 'red'}).setLngLat([land.longitude, land.latitude]).setPopup(popup).addTo(map);
          }
          this.mapServices.setMap(map);
        });

    });

    this.areaRiskService.getAllAreasRisk().subscribe((data) => {
      this.areasRisk = data.body;

      this.areasRisk.forEach(areaRisk => {

        const popup = new Popup().setHTML(`
        <H6>${areaRisk.description}</H6>
        <span>${areaRisk.precautions}</sapan>
        `);
          new Marker({color: 'blue'}).setLngLat([areaRisk.longitude, areaRisk.latitude]).setPopup(popup).addTo(map);
      });
    });

  }

showDialogadd() {
    this.visibleaddRisk = true;
}

closeDialogadd() {
    this.visibleaddRisk = false;
    window.location.reload();
}

saveRisk(){
  console.log("Se guardo el area de riesgo");
  window.location.reload();
}

addAreaRiskButton(){
  this.addAreaRiskA =  true;
}


}

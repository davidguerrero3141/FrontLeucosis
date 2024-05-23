import { LandService } from './../../Services/land/land.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { environment } from 'src/environments/environment';

import Mapboxgl, { Marker, Popup } from 'mapbox-gl';

@Component({
  selector: 'app-fincas-user',
  templateUrl: './fincas-user.component.html',
  styleUrls: ['./fincas-user.component.css'],
  providers: [MessageService]
})
export class FincasUserComponent implements OnInit {

  lands!: any[];

  constructor(private LandService: LandService){

  }

  ngOnInit (): void {
    this.LandService.getAllLands().subscribe((data) => {
      this.lands = data.body;

      this.lands.forEach(land => {
          const popup = new Popup().setHTML(`
          <H6>${land.nameLand}</H6>
          <span>${land.user.name} ${land.user.lastName}</sapan>
          <H6>No hay registros de contagio en esta finca</H6>
          <button type="button" class="btn btn-primary">Ver</button>
          `);
            new Marker({color: 'green'}).setLngLat([land.longitude, land.latitude]).setPopup(popup).addTo(map);
        });
  });

  Mapboxgl.accessToken = environment.mapboxKey;


  const map = new Mapboxgl.Map({
    container: 'mapa-user-lands-mapbox', // container ID
    style: 'mapbox://styles/mapbox/outdoors-v12', // style URL
    center: [-73.3590799, 5.5420138], // starting position [lng, lat]
    zoom: 10, // starting zoom
    });
  }
}

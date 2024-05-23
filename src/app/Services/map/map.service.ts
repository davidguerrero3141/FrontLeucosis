import { Injectable } from '@angular/core';
import { LngLatLike, Map } from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private map?:Map;

  get mapaListo():boolean{
    return !!this.map;
  }

  setMap(mapa: Map){
    this.map = mapa;
  }

  flyTo(coords: LngLatLike){

    if(!this.mapaListo) throw Error('El msps no esta inicializado');

    this.map?.flyTo({
      zoom: 15,
      center: coords
    });
  }
}

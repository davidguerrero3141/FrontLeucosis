import { Coordinate } from './Coordinate';

export class State{
  id: number
  name: string
  coordinate: Coordinate

  constructor(id: number, name: string, coordinate: Coordinate){
    this.id = id
    this.name = name
    this.coordinate = coordinate
  }
}

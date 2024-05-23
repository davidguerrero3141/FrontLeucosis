import { Component } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent {


  basicData: any;

    multiAxisData: any;

    multiAxisOptions: any;

    lineStylesData: any;

    basicOptions: any;


    ngOnInit() {
      this.basicData = {
          labels: [0,5,11,17,23,29,35,41,47,53,59,65,71,77,83,90],
          datasets: [
              {
                  label: 'Bovinos Infectados',
                  data: [6,7,8,10,12,15,17,20,23,26,29,32,34,37,39,41],
                  fill: false,
                  borderColor: '#42A5F5',
                  tension: .4
              },
              {
                  label: 'Bovinos Suceptibles',
                  data: [44,42,42,39,37,34,32,29,26,23,20,17,14,12,10,8],
                  fill: false,
                  borderColor: '#FFA726',
                  tension: .4
              }
          ]
      };
    }
}

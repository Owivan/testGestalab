import { Component, OnInit } from '@angular/core';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  plantas: any;
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA','#ffc107']
  };
  view: any[] = [700, 400];

  data: any[] = [
    {
      "name": " V1",
      "series": [
        {
          "value": 6969,
          "name": "Lunes"
        },
        {
          "value": 5177,
          "name": "Martes"
        },
        {
          "value": 5626,
          "name": "Miércoles"
        },
        {
          "value": 2743,
          "name": "Jueves"
        },
        {
          "value": 2694,
          "name": "Viernes"
        }
      ],
      "total" : 10000
    },
    {
      "name": "V2",
      "series": [
        {
          "value": 3748,
          "name": "Lunes"
        },
        {
          "value": 3105,
          "name": "Martes"
        },
        {
          "value": 4032,
          "name": "Miércoles"
        },
        {
          "value": 6899,
          "name": "Jueves"
        },
        {
          "value": 2793,
          "name": "Viernes"
        }
      ]
    },
    {
      "name": "V3",
      "series": [
        {
          "value": 6040,
          "name": "Lunes"
        },
        {
          "value": 2757,
          "name": "Martes"
        },
        {
          "value": 5341,
          "name": "Miércoles"
        },
        {
          "value": 5273,
          "name": "Jueves"
        },
        {
          "value": 6242,
          "name": "Viernes"
        }
      ]
    },
    {
      "name": "V4",
      "series": [
        {
          "value": 4236,
          "name": "Lunes"
        },
        {
          "value": 2262,
          "name": "Martes"
        },
        {
          "value": 3252,
          "name": "Miércoles"
        },
        {
          "value": 5489,
          "name": "Jueves"
        },
        {
          "value": 6819,
          "name": "Viernes"
        }
      ]
    },
    {
      "name": "V5",
      "series": [
        {
          "value": 2119,
          "name": "Lunes"
        },
        {
          "value": 5393,
          "name": "Martes"
        },
        {
          "value": 5113,
          "name": "Miércoles"
        },
        {
          "value": 5993,
          "name": "Jueves"
        },
        {
          "value": 4123,
          "name": "Viernes"
        }
      ]
    }
  ]

  constructor(config: NgbTabsetConfig) { 
    config.justify = 'center';
    config.type = 'pills';
    

    
  }
  

  ngOnInit() {
    
    this.plantas = [
      {
        nombre: 'Planta 1',
        id:1
      },
      {
        nombre: 'Planta 2',
        id:2
      },
      {
        nombre: 'Planta 3',
        id:3
      }
    ]
  };

  onSelect(id){
    console.log(id);
    
  }

}

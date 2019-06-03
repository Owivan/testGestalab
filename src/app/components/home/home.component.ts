import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbTabsetConfig, NgbTabset, NgbTabChangeEvent} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  tabSet: any;
  @ViewChild(NgbTabset) set content(content: HomeComponent) {
    this.tabSet = content;
  };
  ngAfterViewInit() {
    console.log(this.tabSet.activeId);
  }

  deleteTab() {
    // currently selected tab id
    console.log(this.tabSet.activeId);
  }
  plantas: any;
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA','#ffc107']
  };
  today: number = Date.now();
  view: any[] = [700, 400];
  update:any;

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
      "total" : 23209
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
      ],
      "total" : 20577

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
      ],
      "total" : 25653
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
      ],
      "total" : 22058
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
      ],
      "total" : 22741

    }
  ]

  data2: any[] = [
    {
      "name": " V1",
      "series": [
        {
          "value": 3761,
          "name": "Lunes"
        },
        {
          "value": 2081,
          "name": "Martes"
        },
        {
          "value": 4425,
          "name": "Miércoles"
        },
        {
          "value": 6590,
          "name": "Jueves"
        },
        {
          "value": 3441,
          "name": "Viernes"
        }
      ],
      "total" : 20298
    },
    {
      "name": "V2",
      "series": [
        {
          "value": 5899,
          "name": "Lunes"
        },
        {
          "value": 3042,
          "name": "Martes"
        },
        {
          "value": 3127,
          "name": "Miércoles"
        },
        {
          "value": 3552,
          "name": "Jueves"
        },
        {
          "value": 3552,
          "name": "Viernes"
        }
      ],
      "total" : 19172

    },
    {
      "name": "V3",
      "series": [
        {
          "value": 3531,
          "name": "Lunes"
        },
        {
          "value": 2602,
          "name": "Martes"
        },
        {
          "value": 3100,
          "name": "Miércoles"
        },
        {
          "value": 2998,
          "name": "Jueves"
        },
        {
          "value": 3500,
          "name": "Viernes"
        }
      ],
      "total" : 15731
    },
    {
      "name": "V4",
      "series": [
        {
          "value": 2817,
          "name": "Lunes"
        },
        {
          "value": 2562,
          "name": "Martes"
        },
        {
          "value": 3220,
          "name": "Miércoles"
        },
        {
          "value": 5528,
          "name": "Jueves"
        },
        {
          "value": 4428,
          "name": "Viernes"
        }
      ],
      "total" : 18555
    },
    {
      "name": "V5",
      "series": [
        {
          "value": 5763,
          "name": "Lunes"
        },
        {
          "value": 6391,
          "name": "Martes"
        },
        {
          "value": 3249,
          "name": "Miércoles"
        },
        {
          "value": 3982,
          "name": "Jueves"
        },
        {
          "value": 6982,
          "name": "Viernes"
        }
      ],
      "total" : 26367

    }
  ]
  
  data3: any[] = [
    {
      "name": " V1",
      "series": [
        {
          "value": 3468,
          "name": "Lunes"
        },
        {
          "value": 2126,
          "name": "Martes"
        },
        {
          "value": 2126,
          "name": "Miércoles"
        },
        {
          "value": 4829,
          "name": "Jueves"
        },
        {
          "value": 4568,
          "name": "Viernes"
        }
      ],
      "total" : 17117
    },
    {
      "name": "V2",
      "series": [
        {
          "value": 5899,
          "name": "Lunes"
        },
        {
          "value": 5792,
          "name": "Martes"
        },
        {
          "value": 4525,
          "name": "Miércoles"
        },
        {
          "value": 3123,
          "name": "Jueves"
        },
        {
          "value": 2944,
          "name": "Viernes"
        }
      ],
      "total" : 22283

    },
    {
      "name": "V3",
      "series": [
        {
          "value": 6258,
          "name": "Lunes"
        },
        {
          "value": 2322,
          "name": "Martes"
        },
        {
          "value": 4145,
          "name": "Miércoles"
        },
        {
          "value": 3507,
          "name": "Jueves"
        },
        {
          "value": 3149,
          "name": "Viernes"
        }
      ],
      "total" : 19381
    },
    {
      "name": "V4",
      "series": [
        {
          "value": 6989,
          "name": "Lunes"
        },
        {
          "value": 4984,
          "name": "Martes"
        },
        {
          "value": 2903,
          "name": "Miércoles"
        },
        {
          "value": 4076,
          "name": "Jueves"
        },
        {
          "value": 5539,
          "name": "Viernes"
        }
      ],
      "total" : 24491
    },
    {
      "name": "V5",
      "series": [
        {
          "value": 4945,
          "name": "Lunes"
        },
        {
          "value": 6076,
          "name": "Martes"
        },
        {
          "value": 3006,
          "name": "Miércoles"
        },
        {
          "value": 2120,
          "name": "Jueves"
        },
        {
          "value": 4176,
          "name": "Viernes"
        }
      ],
      "total" : 20323

    }
  ]
  
  
  constructor(config: NgbTabsetConfig) { 
    config.justify = 'center';
    config.type = 'pills';
  }
  onTabChange($event: NgbTabChangeEvent) {
    console.log($event);
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

  updateData(){
    this.update = this.today;
  }

}

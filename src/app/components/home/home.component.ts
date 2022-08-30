import { Component, OnInit } from '@angular/core';
import { IdiomaService } from 'src/app/services/idioma.service';
import { trigger, style, transition, animate, state } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('despliegue1',[
      state('void',style({
        transform:'translate(1000%, 500%)',
        opacity:0
      })),
      transition(':enter',[
        animate(300, style({
          transform:'translate(0, 0)',
          opacity: 1
        }))
      ])
    ]),
    trigger('despliegue2',[
      state('void',style({
        transform:'translate(1000%, 0%)',
        opacity:0
      })),
      transition(':enter',[
        animate(300, style({
          transform:'translate(0, 0)',
          opacity: 1
        }))
      ])
    ]),
    trigger('despliegue3',[
      state('void',style({
        transform:'translate(0, 300%)',
        opacity:0
      })),
      transition(':enter',[
        animate(300, style({
          transform:'translate(0, 0)',
          opacity: 1
        }))
      ])
    ]),
    trigger('despliegue4',[
      state('void',style({
        transform:'translate(-1000%, 500%)',
        opacity:0
      })),
      transition(':enter',[
        animate(300, style({
          transform:'translate(0, 0)',
          opacity: 1
        }))
      ])
    ]),
    trigger('despliegue5',[
      state('void',style({
        transform:'translate(-1000%, 0)',
        opacity:0
      })),
      transition(':enter',[
        animate(300, style({
          transform:'translate(0, 0)',
          opacity: 1
        }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  open:boolean = false;
  language:boolean = true;
  counter:number;
  constructor(
    private langSvc: IdiomaService
  ) { 
  }
  
  ngOnInit(): void {
    this.langSvc.idioma.subscribe(res=>{
      console.log(res.data)
      this.language = res.data
    })
  }
  pump(){
    let circle = document.getElementById('circle')
    circle?.classList.add('grow')
    this.counter = this.counter+1
  }

  clean(){    
    let circle = document.getElementById('circle')
    if(this.counter==1){
      circle?.classList.remove('grow')
    }
  }

  desplegar(){
    if(this.open==false){
      this.open = !this.open;
      
    } else {
      this.open = !this.open;
      
    }
  }
}

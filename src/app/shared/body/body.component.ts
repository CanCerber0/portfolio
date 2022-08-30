import { Component, OnInit } from '@angular/core';
import { IdiomaService } from 'src/app/services/idioma.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  open!:boolean;
  color:string = "primary";
  language:boolean;
  constructor(
    private langSvc: IdiomaService
  ) { 
    this.language = true;
  }

  ngOnInit(): void {
    this.screenSelector()
  }

  screenSelector(){
    let screenWidth = window.screenX;
    let mobile = document.getElementById('mobile');
    let tablet = document.getElementById('tablet');
    let dekstop = document.getElementById('dekstop');
    if(screenWidth>768){
      mobile?.setAttribute('class', 'hide')
      tablet?.setAttribute('class', 'hide')
    } else if(screenWidth>480 || screenWidth<768){
      mobile?.setAttribute('class', 'hide')
      dekstop?.setAttribute('class', 'hide')
    } else if(screenWidth<480){
      tablet?.setAttribute('class', 'hide')
      dekstop?.setAttribute('class', 'hide')
    }
  }

  toggle(){
    if(this.language == true){
      this.language = !this.language;
      this.langSvc.idioma.emit({data: this.language})
      console.log(this.language)
    } else {
      this.language = !this.language;
      this.langSvc.idioma.emit({data:this.language})
      console.log(this.language)
    }
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FooterToggle } from 'src/app/models/footer';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  open!:boolean;

  constructor() { }

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
}

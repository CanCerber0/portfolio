import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FooterToggle } from 'src/app/models/footer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  
  open:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  openFlap(){
    let chevron = document.getElementById('chevron');
    let container = document.getElementById('container')
    let body = document.getElementById("body")
    let icon = document.querySelector('.icon')
    if(this.open == true){
      this.open = !this.open;
      chevron?.classList.add('rolldown');
      chevron?.classList.remove('rollup');
      container?.classList.add('footerdown')
      container?.classList.remove('footerup')
      icon?.classList.add('vanish');
      setTimeout(() => {
        icon?.classList.remove('flex');
      }, 75);
      body?.classList.add('close')
      body?.classList.remove('open')
    } else {
      this.open = !this.open;
      chevron?.classList.add('rollup')
      chevron?.classList.remove('rolldown')
      container?.classList.add('footerup')
      container?.classList.remove('footerdown')
      icon?.classList.add('flex');
      setTimeout(() => {
        icon?.classList.remove('vanish');
      }, 75);
      body?.classList.add('open')
      body?.classList.remove('close')
    }
  }
}

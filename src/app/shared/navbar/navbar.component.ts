import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  slide:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  clickBtn(){
    let bar = document.getElementById("bar");
    let bar2Inner = document.getElementById("bar2-inner");
    let bar2Inner2 = document.getElementById("bar2-inner2");
    let bar3 = document.getElementById("bar3");
    let list = document.getElementById('list')
    if(this.slide==true){
      this.slide = !this.slide;
      bar?.classList.add('deg45');
      bar2Inner?.classList.add('vanish');
      bar2Inner2?.classList.add('vanish');
      bar3?.classList.add('deg135');
      list?.classList.add('slidein');
      list?.classList.remove('slideout');
    } else {
      this.slide = !this.slide
      bar?.classList.remove('deg45');
      bar2Inner?.classList.remove('vanish');
      bar2Inner2?.classList.remove('vanish');
      bar3?.classList.remove('deg135');
      list?.classList.add('slideout');
      list?.classList.remove('slidein');
    }
  }
  overBtn(){

  }
  leaveBtn(){

  }

}

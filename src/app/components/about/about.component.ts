import { Component, OnInit } from '@angular/core';
import { IdiomaService } from 'src/app/services/idioma.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  language:boolean = true;

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

}

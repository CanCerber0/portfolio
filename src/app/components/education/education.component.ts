import { Component, OnInit } from '@angular/core';
import { IdiomaService } from 'src/app/services/idioma.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor(
    private langSvc: IdiomaService
  ) { 
  }

  ngOnInit(): void {
    this.langSvc.idioma.subscribe(data=>{
      console.log(data.data)
    })
  }
}

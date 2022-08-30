import { Component, OnInit } from '@angular/core';
import { IdiomaService } from 'src/app/services/idioma.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

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

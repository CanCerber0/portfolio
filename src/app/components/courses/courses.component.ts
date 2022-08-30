import { Component, OnInit } from '@angular/core';
import { IdiomaService } from 'src/app/services/idioma.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
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

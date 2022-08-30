import { Component, OnInit } from '@angular/core';
import { IdiomaService } from 'src/app/services/idioma.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
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

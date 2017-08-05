import { Component, OnInit } from '@angular/core';
import { Coin } from '../domain/coins/coin';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
private coins: Array<Coin>;
  constructor() { 
    
  }

  ngOnInit() {
  }

}

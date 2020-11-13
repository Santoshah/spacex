import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spacex-card',
  templateUrl: './spacex-card.component.html',
  styleUrls: ['./spacex-card.component.scss']
})
export class SpacexCardComponent implements OnInit {
  
  @Input("spaceX") spacex : any;

  constructor() { }

  ngOnInit(): void {
  }

}

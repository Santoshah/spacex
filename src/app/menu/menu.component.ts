import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  yearLoop : any = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
  selectedItem = 0;

  yearData : any = "all";
  launch_success : any = "all";
  successLand : any = "all";

  constructor(
    private _activateRoute:ActivatedRoute,
  ) {
    this._activateRoute.params.subscribe(params=> {
      console.log(params);
      if(params) {
        this.yearData = params['yearFilter'] == undefined ? "all" : params['yearFilter'];
        this.launch_success = params['successLaunch'] == undefined ? "all" : params['successLaunch'];
        this.successLand = params['successLand'] == undefined ? "all" : params['successLand'];
      }
    })
  }

  ngOnInit(): void {
  }

  getLandFilter(land){
    console.log({land}); 
    this.successLand= land;
  }
  getLaunchFilter(launch){
    console.log({launch})
    this.launch_success = launch;

  }
  getYearFilter(year){
    console.log({year});
    this.yearData = year;
  }

}

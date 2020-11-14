import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  
  
  previousYear : any = "all";
  previous_launch_success : any = "all";
  previous_successLand : any = "all";

  constructor(
    private _activateRoute:ActivatedRoute,
    private _router: Router,
    
  ) {
    this._activateRoute.params.subscribe(params=> {
      console.log(params);
      if(params) {
        this.yearData = params['yearFilter'] == undefined ? "all" : params['yearFilter'] ;
        this.previousYear = params['yearFilter'] == undefined ? "all" : params['yearFilter'] ;

        this.launch_success = params['successLaunch'] == undefined ? "all" : params['successLaunch'];
        this.previous_launch_success = params['successLaunch'] == undefined ? "all" : params['successLaunch'];

        this.successLand = params['successLand'] == undefined ? "all" : params['successLand'];
        this.previous_successLand = params['successLand'] == undefined ? "all" : params['successLand'];
      }
    })
  }

  ngOnInit(): void {
  }

  getLandFilter(land){
    // console.log({land}); 
    if(this.previous_successLand == land) {
      // toggle logic
      console.log("prev and current land, both are same");
      this.successLand = "all"
      this.previous_successLand = "all";
      this.routeOnToggle();
    } else {
      this.successLand= land;
      this.previous_successLand = land;
    }



  }
  getLaunchFilter(launch){
    // console.log({launch})
    
    if(this.previous_launch_success == launch) {
      // toggle logic
      console.log("prev and current launch, both are same");
      this.launch_success = "all"
      this.previous_launch_success = "all";
      this.routeOnToggle();
    
    } else {
      this.launch_success = launch;
      this.previous_launch_success = launch;
    }



  }
  getYearFilter(year){
    // console.log({year});
    if(this.previousYear == year) {
      // toggle logic
      console.log("prev and current click both are same");
      this.yearData = "all"
      this.previousYear = "all";
      this.routeOnToggle();
    
    } else {
      this.yearData = year;
      this.previousYear = year;
    }
  }
  routeOnToggle(){
    this._router.navigate([this.yearData, this.launch_success, this.successLand]);
  }
}



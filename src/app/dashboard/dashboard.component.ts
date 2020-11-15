import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexAPIService } from '../spacex-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Output("getLandFilterVariable") getLandFilterVariable : boolean;
  @Output("getLaunchFilterVariable") getLaunchFilterVariable : boolean;
  @Output("getYearFilterVariable") getYearFilterVariable : number;
  title = 'spaceX';
  spaceXData : any = [];
  yearFilter : any = "";
  successLaunch : any = "";
  successLand : any = "";
  storageData : any;
  loading : boolean = false;
  constructor(
    private _spaceX : SpacexAPIService,
    private _activateRoute:ActivatedRoute,

  ){
    this._activateRoute.params.subscribe(params=> {
      console.log(params);
      this.yearFilter = params['yearFilter'];
      this.successLaunch = params['successLaunch'];
      this.successLand = params['successLand'];
      this.getSpaceXData();
    })
  }

  ngOnInit(){
   this.yearFilter == "" || this.yearFilter == undefined ? this.getSpaceXData() : '';
  }

  getLandFilter(event){
    console.log(event);

  }
  getSpaceXData(){
    this.loading = true;
    this._spaceX.getSpaceXData(this.yearFilter, this.successLaunch, this.successLand).subscribe(allData=>{
      this.loading = false;
      console.log(allData[0]);
      this.spaceXData = allData;

    })
  }
}

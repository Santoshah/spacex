import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from './../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SpacexAPIService {

  
  
  constructor(
    private http: HttpClient
  ) { }

  getSpaceXData(launch_year? : any, launch_success?: any, land_success?: any){
    let params = new HttpParams();
    params = params.append('limit', "100");
    
    //  filter logic for year. if year is blank, undefined or all it will not add the query param in api 
    if(launch_year != "" && launch_year != undefined && launch_year != "all")  {
      params = params.append('launch_year', launch_year);
    }

    // launch success logic. same as launch year.
    if(launch_success != "" && launch_success != undefined && launch_success != "all") {
      let launch_status = launch_success == 1 ? "true" : "false";
      console.log({launch_status})
      params = params.append('launch_success', launch_status);
    }

    // land success logic. same as launch year.
    if(land_success != "" && land_success != undefined && land_success != "all") {
      let land_status = land_success == 1 ? "true" : "false";
      console.log({land_status})
      params = params.append('land_success', land_status);
    }
    
    //FINALLY CALL API WITH APPROPRIATE QUERY PARAMS AND RETURN THE DATA AS OBSERVABLE
    return this.http.get(environment.apiPath+"/v3/launches", {params: params})
        .pipe(map(data => {
          return data;
      }));
  };
}

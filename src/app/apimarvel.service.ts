import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APImarvelService {

 URL_API = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=60d8b3e6413df83e697b065871e77965&hash=879674ff8ed681acb857f21495029040`;

  constructor(private http: HttpClient) { }

  public get (url:string){
    return this.http.get(url);
  }

 
}

//hash 879674ff8ed681acb857f21495029040
//15f7ac1f62100f0de2bc2c2090533ceb167fd021560d8b3e6413df83e697b065871e77965


//https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=60d8b3e6413df83e697b065871e77965&hash=879674ff8ed681acb857f21495029040
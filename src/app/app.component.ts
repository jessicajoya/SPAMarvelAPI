import { Component,OnInit } from '@angular/core';
import { APImarvelService } from './apimarvel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'marvelAPI-JessicaJoya';
  public detailcards:Array<any>=[];
  constructor(private RestService:APImarvelService) { }
  ngOnInit(): void {
    this.detailcards = [
    {
      nombre:'card1',
      contenido:"lorem impsun"
    },
    {
      nombre:'card2',
      contenido:"lorem impsun"
    },
    {
      nombre:'card3',
      contenido:"lorem impsun"
    }

    ]
    this.cargarData();
  }
  public cargarData(){
    this.RestService.get(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=60d8b3e6413df83e697b065871e77965&hash=879674ff8ed681acb857f21495029040`)
    .subscribe(respuesta =>{
      console.log(respuesta)
    })
  }
}
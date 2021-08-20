import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-charactercard',
  templateUrl: './charactercard.component.html',
  styleUrls: ['./charactercard.component.css']
})
export class CharactercardComponent implements OnInit {
  @Input() entryData:any;
  public image!: any;

  constructor() { }

  ngOnInit(): void {
    this.image = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/loki-serie-1617702892.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*'
    console.log(this.entryData)
  }

}

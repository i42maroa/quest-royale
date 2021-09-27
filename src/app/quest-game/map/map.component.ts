import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'quest-game-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {


  firstTeamName:string = "Los aguiluchos";
  secondTeamName:string = "Gigantes nobles";

  constructor() { }

  ngOnInit(): void {
  }

}

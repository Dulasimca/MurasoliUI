import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contents: any = [];

  constructor() { }

  ngOnInit(): void {
    this.contents = [
      { place: 'Chennai', header: "Palm oil pipeline leakage alarms residents in Kasimedu", 
      content: "A complaint has been filed with the Fishing Harbour police station about the pollution caused in the locality A leak in the pipeline carrying edible oil for a private company caused tension among residents of Nagoorar Thottam Pallam in Kasimedu on Tuesday. Maintenance personnel of the oil company were engaged in plugging the leak in the pipeline." },
      { place: 'Madurai', header: "’Siraar Payilarangam’ is a big hit at Madurai Book Fair",
       content: "Scores of people and children were seen flocking to the Madurai Book Fair being hosted at Tamukkam Ground near here despite being a weekday." },
      { place: 'Trichy', header: "Collector inspects flood prevention work", content: "Collector M. Pradeep Kumar on Tuesday visited various flood-prone areas along the Kudamuriti river to inspect the ongoing precautionary works." }
    ]
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  day: any;
  dateToday: Date = new Date();
  constructor() { }

  ngOnInit(): void {
    this.day = new Date().toLocaleString('en-us', {weekday:'long'});
  }

}

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
    const dayStr: string = this.day.toString().split(',');
    switch(dayStr[0].toString().toUpperCase()) {
      case 'MONDAY':
        this.day = this.day.toString().replace(dayStr[0], 'திங்கட்கிழமை');
        break;
      case 'TUESDAY':
        this.day = this.day.toString().replace(dayStr[0], 'செவ்வாய் கிழமை');
        break;
      case 'WEDNESDAY':
        this.day = this.day.toString().replace(dayStr[0], 'புதன் கிழமை');
        break;
      case 'THURSDAY':
        this.day = this.day.toString().replace(dayStr[0], 'வியாழக்கிழமை');
        break;
      case 'FRIDAY':
        this.day = this.day.toString().replace(dayStr[0], 'வெள்ளிக்கிழமை');
        break;
      case 'SATURDAY':
        this.day = this.day.toString().replace(dayStr[0], 'சனிக்கிழமை');
        break;
      case 'SUNDAY':
        this.day = this.day.toString().replace(dayStr[0], 'ஞாயிற்றுக்கிழமை');
        break;
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Converter } from '../helper/converter';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  day: any;
  dateToday: Date = new Date();
  constructor(private _converter: Converter) { }

  ngOnInit(): void {
    this.day = new Date().toLocaleString('en-us', {weekday:'long'});
    const dayStr: string = this.day.toString().split(',');
    var convertedDay = this._converter.convert(dayStr[0].toString().toUpperCase());
    this.day = this.day.toString().replace(dayStr[0], convertedDay);
  }

}

import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'முகப்பு', icon: 'pi pi-fw pi-home', routerLink: '/home'
      },
      {
        label: 'செய்திகள்', icon: 'pi pi-fw pi-volume-up', 
        items: [
          { label: 'மாநில செய்திகள்', routerLink: '/news', queryParams: { 'id': 1 } },
          { label: 'தேசிய செய்திகள்', routerLink: '/news', queryParams: { 'id': 2 } },
          { label: 'மாவட்ட செய்திகள்', routerLink: '/district-news' },
        ]
      },
      {
        label: 'தலையங்கம்', icon: 'pi pi-fw pi-pencil'
      },
      {
        label: 'முரசொலி பற்றி', icon: 'pi pi-fw pi-exclamation-circle'
      },
      {
        label: 'தொடர்பு கொள்க', icon: 'pi pi-fw pi-phone'
      },
      {
        label: 'இ – பேப்பர்', icon: 'pi pi-fw pi-desktop'
      },
      { 
        label: 'சென்னை'
      },
      { 
        label: 'மதுரை'
      },
      { 
        label: 'கோயம்புத்தூர்'
      }
    ];
  }
}

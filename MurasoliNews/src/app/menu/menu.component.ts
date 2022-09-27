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
        label: 'Home', icon: 'pi pi-fw pi-home'
      },
      {
        label: 'Editorial', icon: 'pi pi-fw pi-pencil'
      },
      {
        label: 'About Murasoli', icon: 'pi pi-fw pi-exclamation-circle'
      },
      {
        label: 'Contact', icon: 'pi pi-fw pi-phone'
      },
      {
        label: 'E-Paper', icon: 'pi pi-fw pi-desktop'
      }
    ];
  }
}

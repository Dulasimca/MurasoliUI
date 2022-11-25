import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-e-paper',
  templateUrl: './e-paper.component.html',
  styleUrls: ['./e-paper.component.scss']
})
export class EPaperComponent implements OnInit {
  src: any;
  districtOptions: SelectItem[] = [];
  district: any;
  constructor() { }

  ngOnInit(): void {
    this.src = 'assets/files/murasoliE-paper.pdf';
    this.districtOptions = [
      { label: 'சென்னை', value: '0' },
      { label: 'கோயம்புத்தூர்', value: '1' },
      { label: 'மதுரை', value: '2' },
    ];
  }

  onSelectDistrict() { }

}

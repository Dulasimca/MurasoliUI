import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-paper',
  templateUrl: './e-paper.component.html',
  styleUrls: ['./e-paper.component.scss']
})
export class EPaperComponent implements OnInit {
  src: any;
  constructor() { }

  ngOnInit(): void {
    this.src = 'assets/files/murasoliE-paper.pdf';
  }

}

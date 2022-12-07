import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  headLine: string = '';
  incidentDate: any;
  newsDetail: string = '';
  imgSrc: any;
  list: any[] = [];
  hasImg: boolean = false;
  constructor(private _dataSharing: DataSharingService) { }

  ngOnInit(): void {
    var data = this._dataSharing.getData();
    this.headLine = data.headLine;
    this.incidentDate = data.incidentDate;
    this.newsDetail = data.newsDetail;
    this.list = this.newsDetail.toString().split(',');
    this.hasImg = (data.img && data.img !== '') ? true : false;
    this.imgSrc = this._dataSharing.imgURL + data.img;
    console.log('img', this.hasImg)
  }

}

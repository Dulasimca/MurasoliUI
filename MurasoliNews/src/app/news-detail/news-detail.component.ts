import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../services/data-sharing.service';
import { NewsService } from '../services/news.service';

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
  paperTitle: string = ''; 
  sampleimg: any;
  constructor(private _dataSharing: DataSharingService) { }

  ngOnInit(): void {
    this.paperTitle = this._dataSharing.paperName;
    var data = this._dataSharing.getNewsData();
    this.headLine = data.headLine;
    this.incidentDate = data.incidentDate;
    this.newsDetail = data.newsDetail;
    this.list = this.newsDetail.toString().split(',');
    this.hasImg = (data.img && data.img !== '') ? true : false;
    this.imgSrc = this._dataSharing.imgURL + data.img;
  }

  share() {
    console.log( window.location.href);
  }


}

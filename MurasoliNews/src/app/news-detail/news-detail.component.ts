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
  navUrl: string = '';
  href: string = '';
  constructor(private _dataSharing: DataSharingService) { }

  ngOnInit(): void {
    this.paperTitle = this._dataSharing.paperName;
    var data = this._dataSharing.getNewsData();
    this.headLine = data.headLine;
    this.incidentDate = data.incidentDate;
    this.newsDetail = data.newsDetail;
    this.list = (this.newsDetail) ? this.newsDetail.toString().split(',') : [];
    this.hasImg = (data.img && data.img !== '') ? true : false;
    this.imgSrc = this._dataSharing.imgURL + data.img;
  }

  share(type: string) {
    const shareUrl = window.location.href;
    let returnValue = null;
    if (type === '_MA') {
      this.href = 'mailto:?subject=' + this.headLine + '&body=Check out this ' + shareUrl;
      returnValue = null;
    } else {
      returnValue = this._dataSharing.shareNews(type, shareUrl);
    }
    return returnValue;
  }


}

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
    this.list = this.newsDetail.toString().split(',');
    this.hasImg = (data.img && data.img !== '') ? true : false;
    this.imgSrc = this._dataSharing.imgURL + data.img;
  }

  share(type: string) {
    let searchParams = new URLSearchParams();
    const shareUrl = window.location.href;
    let returnValue = null;
    switch (type) {
      case 'fb':
        searchParams.set('u', shareUrl);
        this.navUrl = this._dataSharing.facebookShareUrl + searchParams;
        returnValue = window.open(this.navUrl, "_blank");
        break;
      case 'tw':
        searchParams.set('url', shareUrl);
        this.navUrl = this._dataSharing.twitterShareUrl + searchParams;
        returnValue = window.open(this.navUrl, "_blank");
        break;
      case 'tg':
        searchParams.set('url', shareUrl);
        this.navUrl = this._dataSharing.telegramShareUrl + searchParams;
        returnValue = window.open(this.navUrl, "_blank");
        break;
      case 'wa':
        searchParams.set('url', shareUrl);
        this.navUrl = this._dataSharing.whatsappShareUrl + searchParams;
        returnValue = window.open(this.navUrl, "_blank");
        break;
      case 'ma':
        this.href = 'mailto:?subject=Me&body=Check out this site ' + shareUrl;
        console.log('href', this.href)
        returnValue = null;
        break;
    }
    return returnValue;
  }


}

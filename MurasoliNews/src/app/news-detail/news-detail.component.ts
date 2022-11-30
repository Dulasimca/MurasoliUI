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
  list: any[] = [];
  constructor(private _dataSharing: DataSharingService, private _datepipe: DatePipe) { }

  ngOnInit(): void {
    var data = this._dataSharing.getData();
    this.headLine = data.headLine;
    this.incidentDate = this._datepipe.transform(data.incidentDate, 'MMM,dd h:mm a');
    this.newsDetail = data.newsDetail;
    this.list = this.newsDetail.toString().split(',');
  }

}

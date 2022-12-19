import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, of, tap } from 'rxjs';
import { Converter } from '../helper/converter';
import { DataSharingService } from '../services/data-sharing.service';
import { NewsService } from '../services/news.service';
import { RestapiService } from '../services/restapi.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  title: string = '';
  newsList: any = [];
  constructor(private _activatedRoute: ActivatedRoute, private _router: Router,
    private _restApiService: RestapiService, private _dataSharing: DataSharingService,
    private _newsService: NewsService) { 
    this._activatedRoute.queryParams.subscribe(params => {
      this.title = (params['id'] === '1') ? 'மாநில செய்திகள்' : 'தேசிய செய்திகள்';
    });
  }

  ngOnInit(): void {
    this.loadNews();
    this._dataSharing.removeNewsData();
  }

  loadNews() {
    this._restApiService.get('MainNewsEntry/GetMainNewsEntry').subscribe(res => {
      if(res) {
        var response = this._newsService.createObject(res.Table);
        this.newsList = response;
      }
    });
  }

  onNavigate(data: any) {
    this._dataSharing.setNewsData(data);
    this._router.navigate(['/news-detail']);
  }

}

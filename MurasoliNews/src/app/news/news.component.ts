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
    private _restApiService: RestapiService, private _datepipe: DatePipe,
    private _converter: Converter, private _dataSharing: DataSharingService) { 
    this._activatedRoute.queryParams.subscribe(params => {
      this.title = (params['id'] === '1') ? 'மாநில செய்திகள்' : 'தேசிய செய்திகள்';
    });
  }

  ngOnInit(): void {
    this.loadNews();
  }

  loadNews() {
    this._restApiService.get('MainNewsEntry/GetMainNewsEntry').subscribe(res => {
      if(res) {
        res.Table.forEach((x: any) => {
          var date = this._datepipe.transform(x.g_incidentdate, 'MMM,dd h:mm a');
          const incidentDate = this._converter.convertMonth(date?.toString());
          x.incidentDate = incidentDate;
          x.imgURL = this._dataSharing.smallImgURL + x.g_image;
          x.hasImg = (x.g_image && x.g_image !== '') ? true : false;this.newsList.push(x);
        })
      }
    });
  }

  onNavigate() {
    this._router.navigate(['/news-detail']);
  }

}

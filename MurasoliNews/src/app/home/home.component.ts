import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';
import { RestapiService } from '../services/restapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  firstColData: any = [];
  secondColData: any = [];
  thridColData: any = [];
  secondMainColData: any = [];
  bottomNewsData: any = [];
  breakingNews: string = '';

  constructor(private _router: Router, private _restApiService: RestapiService,
    private _dataSharing: DataSharingService, private _datepipe: DatePipe) { }

  ngOnInit(): void {
    this._restApiService.get('FlashNewsEntry/GetFlashNewsEntry').subscribe(res => {
      res.Table.forEach((i: any) => {
        this.breakingNews += i.g_newsdetailstamil + ' ,';
      });
    });
    this._restApiService.get('MainNewsEntry/GetMainNewsEntry').subscribe(res => {
      var centerColData: any[] = [];
      res.Table.forEach((data: any) => {
        if (data.g_displayside === 0 && data.g_priority === 2) {
          this.firstColData.push(
            { incidentDate: this._datepipe.transform(data.g_incidentdate, 'MMM,dd h:mm a'), headLine: data.g_newstitletamil,
             newsShort: data.g_newsshorttamil, newsDetail: data.g_newsdetailstamil }
          );
        } else if(data.g_displayside === 2 && data.g_priority === 2) {
          centerColData.push(
            { incidentDate: this._datepipe.transform(data.g_incidentdate, 'MMM,dd h:mm a'), headLine: data.g_newstitletamil,
             newsShort: data.g_newsshorttamil, newsDetail: data.g_newsdetailstamil }
          );
        } else if(data.g_displayside === 1 && data.g_priority === 2) {
          this.thridColData.push(
            { incidentDate: this._datepipe.transform(data.g_incidentdate, 'MMM,dd h:mm a'), headLine: data.g_newstitletamil,
             newsShort: data.g_newsshorttamil, newsDetail: data.g_newsdetailstamil }
          );
        } else if(data.g_displayside === 3 && data.g_priority === 2) {
          this.bottomNewsData.push(
            { incidentDate: this._datepipe.transform(data.g_incidentdate, 'MMM,dd h:mm a'), headLine: data.g_newstitletamil,
             newsShort: data.g_newsshorttamil, newsDetail: data.g_newsdetailstamil }
          );
        }
      })
      centerColData.forEach((item: any, index: number) => {
        if(index != 0) {
          this.secondColData.push(item);
        } else {
          this.secondMainColData.push(item);
        }
      })
    })
  }

  onNavigate(data: any) {
    this._dataSharing.setData(data);
    this._router.navigate(['/news-detail']);
  }

}

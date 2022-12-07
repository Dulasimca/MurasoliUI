import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay, of, tap } from 'rxjs';
import { Converter } from '../helper/converter';
import { AuthService } from '../services/auth.service';
import { DataSharingService } from '../services/data-sharing.service';
import { NewsService } from '../services/news.service';
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
    private _dataSharing: DataSharingService, private _datepipe: DatePipe,
    private _converter: Converter, private _authService: AuthService, private _newsService: NewsService) { }

  ngOnInit(): void {
    // this._newsService.getUser().subscribe(res => {
    //   console.log('res', res)
    // })
    this._authService.home();
    this.loadContent();
  }

  loadContent() {
    this._restApiService.get('FlashNewsEntry/GetFlashNewsEntry').subscribe(res => {
      res.Table.forEach((i: any) => {
        this.breakingNews += i.g_newsdetailstamil + ' ,';
      });
    });

    this._restApiService.get('MainNewsEntry/GetMainNewsEntry').subscribe(res => {
      if (res) {
        // var centerColData: any[] = [];
        this._newsService.setNewsData(res.Table);
        var setLeftCount = 0, setSecondMainCount = 0, setCenterCount = 0, setRightCount = 0, setBottomCount = 0;
        res.Table.forEach((data: any) => {
          var date = this._datepipe.transform(data.g_incidentdate, 'MMM,dd h:mm a');
          const incidentDate = this._converter.convertMonth(date?.toString());
          if (data.g_displayside === 0 && data.g_priority === 2) {
            if (setLeftCount < 4) {
              this.firstColData.push(
                {
                  incidentDate: incidentDate, headLine: data.g_newstitletamil,
                  newsShort: data.g_newsshorttamil, newsDetail: data.g_newsdetailstamil,
                  img: data.g_image, imgURL: this._dataSharing.smallImgURL + data.g_image,
                  hasImg: (data.g_image && data.g_image !== '') ? true : false
                }
              );
              setLeftCount++;
            }
          } else if (data.g_displayside === 2 && data.g_priority === 2) {
            if (setSecondMainCount < 1) {
              this.secondMainColData.push(
                {
                  incidentDate: incidentDate, headLine: data.g_newstitletamil,
                  newsShort: data.g_newsshorttamil, newsDetail: data.g_newsdetailstamil,
                  img: data.g_image, imgURL: this._dataSharing.imgURL + data.g_image,
                  hasImg: (data.g_image && data.g_image !== '') ? true : false
                }
              );
            }
          } else if (data.g_displayside === 2 && data.g_priority === 1) {
            if (setCenterCount <= 3) {
              this.secondColData.push(
                {
                  incidentDate: incidentDate, headLine: data.g_newstitletamil,
                  newsShort: data.g_newsshorttamil, newsDetail: data.g_newsdetailstamil,
                  img: data.g_image, imgURL: this._dataSharing.imgURL + data.g_image,
                  hasImg: (data.g_image && data.g_image !== '') ? true : false
                }
              );
              setCenterCount++;
            }
          } else if (data.g_displayside === 1 && data.g_priority === 2) {
            if (setRightCount < 4) {
              this.thridColData.push(
                {
                  incidentDate: incidentDate, headLine: data.g_newstitletamil,
                  newsShort: data.g_newsshorttamil, newsDetail: data.g_newsdetailstamil,
                  img: data.g_image, imgURL: this._dataSharing.smallImgURL + data.g_image,
                  hasImg: (data.g_image && data.g_image !== '') ? true : false
                }
              );
              setRightCount++;
            }
          } else if (data.g_displayside === 3 && data.g_priority === 2) {
            if (setBottomCount < 4) {
              this.bottomNewsData.push(
                {
                  incidentDate: incidentDate, headLine: data.g_newstitletamil,
                  newsShort: data.g_newsshorttamil, newsDetail: data.g_newsdetailstamil,
                  img: data.g_image, imgURL: this._dataSharing.smallImgURL + data.g_image,
                  hasImg: (data.g_image && data.g_image !== '') ? true : false
                }
              );
              setBottomCount++;
            }
          }
        })
        // centerColData.forEach((item: any, index: number) => {
        //   item.imgURL = this._dataSharing.smallImgURL + item.img;
        //   if (index != 0) {
        //     this.secondColData.push(item);
        //   } else {
        //     this.secondMainColData.push(item);
        //   }
        // })
      } else {
        console.log('error occurred');
      }
    }, (err: HttpErrorResponse) => {
      if (err.status === 0 || err.status === 400) { }
    });
  }

  onNavigate(data: any) {
    this._dataSharing.setData(data);
    this._router.navigate(['/news-detail']);
  }

}

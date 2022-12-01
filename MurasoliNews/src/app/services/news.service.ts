import { Injectable } from '@angular/core';
import { Observable, share } from 'rxjs';
import { RestapiService } from './restapi.service';

@Injectable({
    providedIn: 'root'
  })
  export class NewsService {
    news: any[] = [];
    data!: Observable<any>;
    district?: any = [];

    constructor(private _restApiService: RestapiService) { }

    getDistrict(): any {
        this.district = [];
        this._restApiService.get('DistrictMaster/GetDistrictMaster').subscribe(res => {
            this.district = res;
        })
        return this.district;
    }

    getUser(): Observable<any> {
        console.log('service data', this.data)
        if (this.data === undefined) {
            console.log('no data found')
            console.log('calling....')
            this.data = this._restApiService.get('MainNewsEntry/GetMainNewsEntry').pipe(share());
            return this.data;
        } else {
            console.log('data exists') 
          return this.data;
        }
      }

    setNewsData(data: any) {
        this.news = data;
    }

    getNewsData() {
        return this.news;
    }
  }
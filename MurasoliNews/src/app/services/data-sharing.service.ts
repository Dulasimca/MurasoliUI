import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class DataSharingService {
    smallImgURL: string = 'http://172.16.80.21:84/assets/layout/thump/';
    imgURL: string = 'http://172.16.80.21:84/assets/layout/Documents/';
    paperName: string = 'முரசொலி';

    setNewsData(data: any) {
      localStorage.setItem('NEWS-DETAIL', JSON.stringify(data));
    }

    getNewsData() {
        return JSON.parse(localStorage.getItem('NEWS-DETAIL') as any);
    }

    removeNewsData() {
      localStorage.removeItem('NEWS-DETAIL');
    }
  }
  
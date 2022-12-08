import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class DataSharingService {
    data: any;
    smallImgURL: string = 'http://172.16.80.21:84/assets/layout/thump/';
    imgURL: string = 'http://172.16.80.21:84/assets/layout/Documents/';
    paperName: string = 'முரசொலி';

    setData(data: any) {
        this.data = data;
    }

    getData() {
        return this.data;
    }
  }
  
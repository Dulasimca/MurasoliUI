import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class DataSharingService {
    smallImgURL: string = 'http://172.16.80.21:84/assets/layout/thump/';
    imgURL: string = 'http://172.16.80.21:84/assets/layout/Documents/';
    paperName: string = 'முரசொலி';
    //share social media url's
    facebookShareUrl: string = 'https://www.facebook.com/sharer/sharer.php?';
    twitterShareUrl: string = 'https://twitter.com/share?';
    whatsappShareUrl: string = 'https://api.whatsapp.com/send?&text=';
    telegramShareUrl: string = 'https://t.me/share/url?';

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
  
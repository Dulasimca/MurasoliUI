import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  smallImgURL: string = 'https://murasoliadmin.devtesting.in/assets/layout/thump/';
  imgURL: string = 'https://murasoliadmin.devtesting.in/assets/layout/Documents/';
  paperName: string = 'முரசொலி';
  fileURL: string = 'https://murasoli.devtesting.in/assets/files/';
  //share social media url's
  facebookShareUrl: string = 'https://www.facebook.com/sharer/sharer.php?';
  twitterShareUrl: string = 'https://twitter.com/share?';
  whatsappShareUrl: string = 'https://api.whatsapp.com/send?&text=';
  telegramShareUrl: string = 'https://t.me/share/url?';

  shareNews(type: string, shareUrl: string) {
    let searchParams = new URLSearchParams();
    let returnValue = null;
    var navUrl = null;
    switch (type) {
      case '_FB':
        searchParams.set('u', shareUrl);
        navUrl = this.facebookShareUrl + searchParams;  
        break;
      case '_WA':
        searchParams.set('url', shareUrl);
        navUrl = this.whatsappShareUrl + searchParams;
        break;
      case '_TW':
        searchParams.set('url', shareUrl);
        navUrl = this.twitterShareUrl + searchParams;
        break;
      case '_TG':
        searchParams.set('url', shareUrl);
        navUrl = this.telegramShareUrl + searchParams;
        break;
    }
    returnValue = window.open(navUrl as any, "_blank");
  }

}

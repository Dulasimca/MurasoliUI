import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { NgxExtendedPdfViewerService, pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-e-paper',
  templateUrl: './e-paper.component.html',
  styleUrls: ['./e-paper.component.scss']
})
export class EPaperComponent implements OnInit {
  src: any;
  districtOptions: SelectItem[] = [];
  district: any;
  date: Date = new Date();
  items: any = [];
  constructor(private _dataSharing: DataSharingService) {
    pdfDefaultOptions.doubleTapZoomFactor = '150%'; // The default value is '200%'
    pdfDefaultOptions.maxCanvasPixels = 4096 * 4096 * 5;
  }

  ngOnInit(): void {
    this.src = 'assets/files/murasoliE-paper.pdf';
    this.districtOptions = [
      { label: 'சென்னை', value: '0' },
      { label: 'கோயம்புத்தூர்', value: '1' },
      { label: 'மதுரை', value: '2' },
    ];

    this.items = [
      {
        icon: 'pi pi-facebook',
        command: () => {
          this.share('_FB');
        }
      },
      {
        icon: 'pi pi-twitter',
        command: () => {
          this.share('_TW');
        }
      },
      {
        icon: 'pi pi-send',
        command: () => {
          this.share('_TG');
        }
      },
      {
        icon: 'pi pi-whatsapp',
        command: () => {
          this.share('_WA');
        }
      },
    ];
  }

  onSelectDistrict() { }

  share(type: string) {
    const shareUrl = this._dataSharing.fileURL + 'murasoliE-paper.pdf';
    let returnValue = null;
    returnValue = this._dataSharing.shareNews(type, shareUrl);
    return returnValue;
  }

}

import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { NgxExtendedPdfViewerService, pdfDefaultOptions, TextLayerRenderedEvent } from 'ngx-extended-pdf-viewer';
import { DataSharingService } from '../services/data-sharing.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-e-paper',
  templateUrl: './e-paper.component.html',
  styleUrls: ['./e-paper.component.scss']
})
export class EPaperComponent implements OnInit {
  src: any;
  districtOptions: SelectItem[] = [];
  district: any = 0;
  date: Date = new Date();
  items: any = [];
  layers: any;
  public enablePinchOnMobile = true;

  public zoomLevels = ['auto', 'page-actual', 'page-fit', 'page-width',
    0.5, 0.67, 0.75, 0.82, 0.9, 1, 1.1, 1.15,
    1.25, 1.5];
  urlSafe: any;
   
  constructor(private _dataSharing: DataSharingService, private _pdfService: NgxExtendedPdfViewerService,
    private sanitizer: DomSanitizer) {
    pdfDefaultOptions.doubleTapZoomFactor = '150%'; // The default value is '200%'
    pdfDefaultOptions.maxCanvasPixels = 4096 * 4096 * 5;
  }

  public exportAsText(pageNum: number): void {
    (async () => {
      const text = await this._pdfService.getPageAsText(pageNum);
      console.log('txt', text);
    })();
  }
  
  pageChange($event: any) { console.log('anno eve', $event ); this.exportAsText($event); };
  ngOnInit(): void {
    this.src = 'assets/files/murasoliE-paper.pdf';
    this.districtOptions = [
      { label: 'சென்னை', value: '0' },
      { label: 'கோயம்புத்தூர்', value: '1' },
      { label: 'மதுரை', value: '2' },
    ];
    var url: string = this._dataSharing.fileURL +  "sample.indd";
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(url);

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

  highlightWords($event: any) {
    console.log('event', $event);
    $event.source.enhanceTextSelection = true;
  }

  getSelect($event: any) {
    console.log('select', $event)
  }

  share(type: string) {
    const shareUrl = this._dataSharing.fileURL + 'murasoliE-paper.pdf';
    let returnValue = null;
    returnValue = this._dataSharing.shareNews(type, shareUrl);
    return returnValue;
  }

}

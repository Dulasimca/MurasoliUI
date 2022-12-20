import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { Converter } from '../helper/converter';
import { DataSharingService } from '../services/data-sharing.service';
import { NewsService } from '../services/news.service';
import { RestapiService } from '../services/restapi.service';

@Component({
  selector: 'app-district-news',
  templateUrl: './district-news.component.html',
  styleUrls: ['./district-news.component.scss']
})
export class DistrictNewsComponent implements OnInit {
  newsDetails: any = [];
  newsAllData: any[] = [];
  title: string = 'மாவட்ட செய்திகள்';
  districtOptions: SelectItem[] = [];
  district: any;
  districts?: any = [];
  constructor(private _router: Router, private _restApiService: RestapiService,
    private _newsService: NewsService) { }

  ngOnInit(): void {
    this.loadNews();
    this._newsService.getDistrict();
  }

  loadNews() {
    this._restApiService.get('MainNewsEntry/GetMainNewsEntry').subscribe(res => {
      if (res) {
        var response = this._newsService.createObject(res.Table);
        this.newsDetails = response;
        this.newsAllData = this.newsDetails.slice(0);
      }
    });
  }

  onChangeDistrict() {
    this.title = this.district.label;
    const filteredData = this.newsAllData.filter(f => {
      return (f.g_district * 1) === (this.district.value * 1);
    });
    this.newsDetails = filteredData;
  }

  onSelectDistrict() {
    var data: any = [];
    this.districts = this._newsService.district;
    if (this.districts) {
      this.districts.Table.forEach((d: any) => {
        data.push({ label: d.g_districtnametamil, value: d.g_districtid, engLabel: d.g_districtnametamil });
      })
      this.districtOptions = data;
    }
  }

  onNavigate(data: any) {
    this._router.navigate(['/newscontent'], {queryParams: { storyid: data.storyId }});
  }

}

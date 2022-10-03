import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-district-news',
  templateUrl: './district-news.component.html',
  styleUrls: ['./district-news.component.scss']
})
export class DistrictNewsComponent implements OnInit {
  newsDetails: any = [];
  title: string = 'மாவட்ட செய்திகள்';
  districtOptions: SelectItem[] = [];
  district: any;
  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.newsDetails = [
      { incidentDate: 'Sep 28, 10.00am', headLine: "ஐயான் சூறாவளி தாக்குதல்; கியூபாவில் அகதிகள் படகு கவிழ்ந்தது 20 பேர் மாயம்", 
      news: "கியூபாவின் அகதிகள் சென்ற படகு ஐயான் சூறாவளியில் சிக்கியதில் 20 பேரை காணவில்லை. 3 பேர் மீட்கப்பட்டனர்." },
      { incidentDate: 'Sep 28, 10.20am', headLine: "பிஎப்ஐ தலைவர்கள், உறுப்பினர்கள் மீது 1,400 வழக்குகள்",
       news: "தடை செய்யப்பட்டு உள்ள பிஎப்ஐ மீது நாடு முழுவதும் 1400 க்கும் மேற்பட்ட இப்போது கிரிமினல் வழக்குகள் பதிவு செய்யப்பட்டு உள்ளன." },
      { incidentDate: 'Sep 28, 10.25am', headLine: "தமிழகத்தில் பல இடங்களில் ஆர்.எஸ்.எஸ் ஊர்வலத்திற்கு போலீசார் அனுமதி மறுப்பு",
       news: "தமிழ்நாடு முழுவதும் பல இடங்களில் அக். 2ம் தேதி நடக்க உள்ள ஆர்.எஸ்.எஸ். ஊர்வலத்திற்கு ,போலீசார் அனுமதிக்கு மறுப்பு தெரிவித்துள்ளார்." },
      { incidentDate: 'Sep 28, 10.25am', headLine:"தொடர்ந்து 3-வது நாளாக 4 ஆயிரத்துக்கு கீழே கொரோனா பாதிப்பு",
       news: "இந்தியாவில் தொடர்ந்து 3-வது நாளாக கொரோனா தினசரி பாதிப்பு 4 ஆயிரத்துக்கு கீழே பதிவானது." }
    ];
    this.districtOptions = [
      { label: 'சென்னை', value: 'சென்னை' },
      { label: 'செங்கல்பட்டு', value: 'செங்கல்பட்டு' },
      { label: 'கோயம்புத்தூர்', value: 'கோயம்புத்தூர்' },
      { label: 'கடலூர்', value: 'கடலூர்' },
      { label: 'காஞ்சிபுரம்', value: 'காஞ்சிபுரம்' },
      { label: 'மதுரை', value: 'மதுரை' },
      { label: 'நாமக்கல்', value: 'நாமக்கல்' },
      { label: 'தஞ்சாவூர்', value: 'தஞ்சாவூர்' },
    ];
  }

  onSelectDistrict() {
    this.title = this.district;
  }

  onNavigate() {
    this._router.navigate(['/news-detail']);
  }

}

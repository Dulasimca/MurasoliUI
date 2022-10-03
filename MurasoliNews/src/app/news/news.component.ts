import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  title: string = '';
  newsList: any = [];
  constructor(private _activatedRoute: ActivatedRoute, private _router: Router) { 
    this._activatedRoute.queryParams.subscribe(params => {
      this.title = (params['id'] === '1') ? 'மாநில செய்திகள்' : 'தேசிய செய்திகள்';
    });
  }

  ngOnInit(): void {
   
    this.newsList = [
      {
        headLine: 'மாவட்ட கல்வி அலுவலகம் முன்பு  ஆரம்பப்பள்ளி ஆசிரியர் கூட்டணியினர் ஆர்ப்பாட்டம்',
        incidentDate: 'செப்டம்பர் 29, 2022, 8:03 pm',
        news: 'தேனி தொழிலாளர் அலுவலகத்தில் பாதுகாப்பு உபகரணங்கள் கேட்டு ஊழியர்களிடம் தொழிலாளா்கள் வாக்குவாதத்தில் ஈடுபட்டனர்.'
      },
      {
        headLine: 'கடலூர் மத்திய சிறையில் உள்ள சவுக்கு சங்கரை பார்வையாளர்கள் சந்திக்க ஒரு மாதத்திற்கு தடை',
        incidentDate: 'செப்டம்பர் 29, 2022, 8:02 pm',
        news: 'சவுக்கு சங்கரை சிறையில் பார்வையாளர்கள் சந்திக்க ஒரு மாதத்திற்கு கடலூர் மத்திய சிறை நிர்வாகம் தடை விதித்து உத்தரவிட்டுள்ளது'
      },
      {
        headLine: 'பஸ் விபத்தில் காயம் அடைந்தவர்களுக்கு அமைச்சர் ஆறுதல்',
        incidentDate: 'செப்டம்பர் 29, 2022, 8:10 pm',
        news: 'பஸ் விபத்தில் காயம் அடைந்தவர்களுக்கு அமைச்சர் ஆறுதல்'
      },
    ]
  }

  onNavigate() {
    this._router.navigate(['/news-detail']);
  }

}

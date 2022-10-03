import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DistrictNewsComponent } from './district-news/district-news.component';
import { HomeComponent } from './home/home.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'news', component: NewsComponent },
    { path: 'district-news', component: DistrictNewsComponent },
    { path: 'news-detail', component: NewsDetailComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  
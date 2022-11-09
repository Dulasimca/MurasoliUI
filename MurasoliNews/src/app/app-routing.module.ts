import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DistrictNewsComponent } from './district-news/district-news.component';
import { EPaperComponent } from './e-paper/e-paper.component';
import { HomeComponent } from './home/home.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'news', component: NewsComponent },
    { path: 'district-news', component: DistrictNewsComponent },
    { path: 'news-detail', component: NewsDetailComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact-us', component: ContactUsComponent},
    { path: 'e-paper', component: EPaperComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  
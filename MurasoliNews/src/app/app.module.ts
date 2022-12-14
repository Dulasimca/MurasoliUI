import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { CommonModule, DatePipe } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { SpeedDialModule } from 'primeng/speeddial';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { DistrictNewsComponent } from './district-news/district-news.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EPaperComponent } from './e-paper/e-paper.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AuthService } from './services/auth.service';
import { RestapiService } from './services/restapi.service';
import { PaperReaderComponent } from './paper-reader/paper-reader.component';
import { DataSharingService } from './services/data-sharing.service';
import { Converter } from './helper/converter';
import { AuthGuard } from './services/auth.guard';
import { NewsService } from './services/news.service';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    HomeComponent,
    NewsComponent,
    NewsDetailComponent,
    DistrictNewsComponent,
    AboutComponent,
    ContactUsComponent,
    EPaperComponent,
    PaperReaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CommonModule,
    FormsModule,
    MenubarModule,
    DropdownModule,
    HttpClientModule,
    PdfViewerModule,
    DialogModule,
    CalendarModule,
    NgxExtendedPdfViewerModule,
    SpeedDialModule
  ],
  entryComponents: [],
  providers: [AuthService, RestapiService, DatePipe, DataSharingService, Converter, AuthGuard, NewsService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

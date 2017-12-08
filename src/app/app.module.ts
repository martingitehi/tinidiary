import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { Tini } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CallNumber } from '@ionic-native/call-number';
import { Network } from '@ionic-native/network';
import { ListPageModule } from '../pages/list/list.module';
import { PostDetailPageModule } from '../pages/post-detail/post-detail.module';
import { HollaPageModule } from '../pages/holla/holla.module';
import { PublicationsPageModule } from '../pages/publications/publications.module';
import { InstagramPageModule } from '../pages/instagram/instagram.module';
import { SplashPageModule } from '../pages/splash/splash.module';
import { PhotoViewPageModule } from '../pages/photo-view/photo-view.module';
import { FileOpener } from '@ionic-native/file-opener';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { FacebookPageModule } from '../pages/facebook/facebook.module';

@NgModule({
  declarations: [
    Tini
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ListPageModule,
    HollaPageModule,
    PostDetailPageModule,
    InstagramPageModule,
    FacebookPageModule,
    PublicationsPageModule,
    PhotoViewPageModule,
    SplashPageModule,
    IonicModule.forRoot(Tini),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Tini
  ],
  providers: [
    StatusBar,
    CallNumber,
    DocumentViewer,
    FileOpener,
    Network,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }

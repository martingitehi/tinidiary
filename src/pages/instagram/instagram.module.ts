import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstagramPage } from './instagram';
import { IonicImageViewerModule } from 'ionic-img-viewer';
@NgModule({
  declarations: [
    InstagramPage,
  ],
  imports: [
    IonicImageViewerModule,
    IonicPageModule.forChild(InstagramPage),
  ],
})
export class InstagramPageModule { }

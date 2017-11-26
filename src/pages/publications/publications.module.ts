import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublicationsPage } from './publications';
import { IonicImageViewerModule } from 'ionic-img-viewer';
@NgModule({
  declarations: [
    PublicationsPage,
  ],
  imports: [
    IonicImageViewerModule,
    IonicPageModule.forChild(PublicationsPage),
  ],
})
export class PublicationsPageModule {}

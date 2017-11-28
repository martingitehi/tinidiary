import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublicationsPage } from './publications';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { FilterPipe } from '../../services/filter.pipe';

@NgModule({
  declarations: [
    PublicationsPage,
      FilterPipe
  ],
  imports: [
    IonicImageViewerModule,
    IonicPageModule.forChild(PublicationsPage),
  ]
})
export class PublicationsPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
// import { IonicImageViewerModule } from 'ionic-img-viewer';
import { PhotoViewPage } from './photo-view';

@NgModule({
  declarations: [
    PhotoViewPage,
  ],
  imports: [
    IonicPageModule.forChild(PhotoViewPage),
  ],
})
export class PhotoViewPageModule {}

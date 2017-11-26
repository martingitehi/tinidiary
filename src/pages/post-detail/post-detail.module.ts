import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostDetailPage } from './post-detail';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    PostDetailPage,
  ],
  imports: [
    IonicImageViewerModule,
    IonicPageModule.forChild(PostDetailPage),
  ],
})
export class PostDetailPageModule {}

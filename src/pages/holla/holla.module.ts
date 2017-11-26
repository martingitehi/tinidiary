import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HollaPage } from './holla';

@NgModule({
  declarations: [
    HollaPage,
  ],
  imports: [
    IonicPageModule.forChild(HollaPage),
  ],
})
export class HollaPageModule {}

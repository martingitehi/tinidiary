import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { SplashScreen } from '@ionic-native/splash-screen';


@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  constructor(public viewCtrl:ViewController, private splash:SplashScreen) {
  }


  ionViewDidEnter() {
    
       this.splash.hide();
    
       setTimeout(() => {
         this.viewCtrl.dismiss();
       }, 4000);
    
     }

}

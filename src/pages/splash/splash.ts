import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { SplashScreen } from '@ionic-native/splash-screen';


@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {
  logo: string = `assets/imgs/svg (${Math.ceil(Math.random() * (5 - 1) + 1)}).svg`;
  constructor(public viewCtrl: ViewController, private splash: SplashScreen) { }

  ionViewDidEnter() {
    this.splash.hide();
    setTimeout(() => {
      this.viewCtrl.dismiss();
    }, 3000);
  }
}

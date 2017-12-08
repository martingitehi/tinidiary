import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListPage } from '../pages/list/list';
import { InstagramPage } from '../pages/instagram/instagram';
import { HollaPage } from '../pages/holla/holla';
import { PublicationsPage } from '../pages/publications/publications';
import { SplashPage } from '../pages/splash/splash';
import { FacebookPage } from '../pages/facebook/facebook';

@Component({
  templateUrl: 'app.html'
})
export class Tini {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ListPage;

  pages: Array<{title: string, component: any, icon:string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private modalCtrl:ModalController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Wordpress', component: ListPage, icon:'logo-wordpress' },
      { title: 'Facebook', component: FacebookPage, icon: 'logo-facebook' },
      { title: 'Twitter', component: ListPage, icon:'logo-twitter' },
      { title: 'Instagram', component: InstagramPage, icon:'logo-instagram' },
      { title: 'Books', component: PublicationsPage, icon:'book' },
      { title: 'Contact', component: HollaPage, icon:'call' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      let splash = this.modalCtrl.create(SplashPage);
      splash.present();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

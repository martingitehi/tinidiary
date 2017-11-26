import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListPage } from '../pages/list/list';
import { InstagramPage } from '../pages/instagram/instagram';
import { HollaPage } from '../pages/holla/holla';
import { PublicationsPage } from '../pages/publications/publications';

@Component({
  templateUrl: 'app.html'
})
export class Tini {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ListPage;

  pages: Array<{title: string, component: any, icon:string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Wordpress', component: ListPage, icon:'logo-wordpress' },
      { title: 'Facebook', component: ListPage, icon: 'logo-facebook' },
      { title: 'Twitter', component: ListPage, icon:'logo-twitter' },
      { title: 'Instagram', component: InstagramPage, icon:'logo-instagram' },
      { title: 'Medium', component: ListPage, icon:'paper' },
      { title: 'Books', component: PublicationsPage, icon:'paper' },
      { title: 'Contact', component: HollaPage, icon:'contact' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

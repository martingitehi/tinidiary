import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';


@IonicPage()
@Component({
  selector: 'page-facebook',
  templateUrl: 'facebook.html',
})
export class FacebookPage {
  fb_url: string = 'https://graph.facebook.com/v2.11/me?fields=id%2Cname%2Cfeed%7Battachments%2Cmessage%2Cstory%2Clikes%2Ccreated_time%2Ccomments%7D&access_token=EAACEdEose0cBAIt2BmtvWke5Nx6H7Vdiw6R3d4uE6WyrXW3TlZCh8wZATfSounUQ6y7ioPs8hQanjqRtySFSqnn4kCgZChHB5JwlkUZCTIH2oNldmp2UTGfWMpiGaaX4ttwZCNs4a3bbrwcawlkdZBPkaPubtZBT4ihbgGMRuZAgkdvhxABDcSmLJDz840ZBDIcrTZAsWY0sxuaAZDZD';
  posts:any[];

  constructor(public navCtrl: NavController, private http:Http, public navParams: NavParams) {
 
  }

  async ionViewDidEnter(){
    await this.getFBInfo();
  }

  async getFBInfo(): Promise<any> {
    await this.http.get(this.fb_url).subscribe(info => {
      this.posts = info.json().feed.data;
      console.log(info.json().feed.data);
    });
  }

}

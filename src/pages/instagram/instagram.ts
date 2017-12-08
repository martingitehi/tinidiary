import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-instagram',
  templateUrl: 'instagram.html',
})
export class InstagramPage {
  images: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
  }

  async ionViewDidLoad() {
    await this.getInstagramImages();
  }

  async getInstagramImages() {
    //get the Instagram images from API
    await this.http.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=4897624042.e7f1fdd.096c617a23894246909f7c1f7be929fc').subscribe((res) => {
      console.log(res.json())
      this.images = res.json().data;
    }, (err => { console.error(err) }), () => { console.log('Photos fetched successfully.') });
  }

  viewImage(photo: any) {
    this.navCtrl.push('PhotoViewPage', { photo: photo });
  }



}

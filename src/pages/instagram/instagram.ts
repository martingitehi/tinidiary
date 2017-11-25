import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http/src/client';
import { HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the InstagramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-instagram',
  templateUrl: 'instagram.html',
})
export class InstagramPage {
  instagramImages: any;
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
  }

  ionViewDidLoad() {
    this.getInstagramImages();
  }

  getInstagramImages() {
    //get the Instagram images from API
    this.http.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=4897624042.e7f1fdd.096c617a23894246909f7c1f7be929fc', { headers: this.headers }).subscribe(images => {
      this.instagramImages = images;
    })
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-photo-view',
  templateUrl: 'photo-view.html',
})
export class PhotoViewPage {
  photo: any;
  comments: any[];
  constructor(private navParams: NavParams, private http: Http) {
    this.photo = this.navParams.get('photo');
  }

  async ionViewDidLoad() {
    await this.getComments();
  }

  async getComments() {
    await this.http.get(`https://api.instagram.com/v1/media/${this.photo.id}/comments?access_token=4897624042.e7f1fdd.096c617a23894246909f7c1f7be929fc`)
      .subscribe(c => {
        console.log(c.json())
        // this.comments = c.json();
      }, (err => { console.error(err) }),
      () => {
        console.log('Comments fetched successfully.')
      })
  }
}

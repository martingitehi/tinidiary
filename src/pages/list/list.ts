import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RequestOptions, Http, Headers, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  posts: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) { }

  async ionViewDidLoad() {
    await this.getWordpressPosts();
  }

  async getWordpressPosts(): Promise<any> {
    //get the Wordpress posts from API 
    await this.http.get('https://public-api.wordpress.com/rest/v1.1/sites/kushandcakes.wordpress.com/posts/')
      .subscribe(res => {
        console.log(res.json().posts)
        this.posts = res.json().posts;
        _.each(this.posts, (p) => {
          console.log(this.makeArray(p));
        })
      }, (err => { console.error(err) }), () => { console.log('Posts fetched successfully.') });
  }

  viewPost(event, post: any) {
    this.navCtrl.push('PostDetailPage', { post: post });
  }
  makeArray(obj:object) {
    let arr = Object.keys(obj).map((key) => { return obj[key]; });
    // if(Object.keys('attachments')){
    //   let arr:Array<any>= _.values(obj);
    // }
  }
}

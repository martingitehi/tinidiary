import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RequestOptions, Http, Headers, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  posts: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) { }

  async ionViewDidLoad() {
    await this.getWordpressPosts().then((posts: any) => {
      _.each(posts, (post) => {
      
      });
    });
  }

  async getWordpressPosts(): Promise<any> {
    //get the Wordpress posts from API 
    await this.http.get('https://public-api.wordpress.com/rest/v1.1/sites/kushandcakes.wordpress.com/posts/?number=50')
      .subscribe(res => {
        console.log(res.json().posts)
        this.posts = res.json().posts;
      },
      (err => { console.error(err) }),
      () => {
        console.log('Posts fetched successfully.')
      });
  }


  viewPost(event, post: any) {
    this.navCtrl.push('PostDetailPage', { post: post });
  }


}

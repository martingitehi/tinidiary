import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import * as _ from 'lodash';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  posts: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) { }

  async ionViewDidLoad() {
    await this.getWordpressPosts().then((posts: any) => {
      _.each(posts, (post: any) => {
        let imageUrl: boolean = post.content.indexOf('<img src');
        console.log(imageUrl)
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

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import * as _ from 'lodash';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  site: any;
  posts: any[];
  categories: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) { }

  async ionViewDidLoad() {
    await this.getSiteInfo();
    await this.getCategories();
    await this.getPosts();
  }

  async getCategories(): Promise<any> {
    //get the Wordpress categories from API 
    await this.http.get('https://public-api.wordpress.com/rest/v1.1/sites/kushandcakes.wordpress.com/categories')
      .subscribe(res => {
        console.log(res.json())
        this.categories = res.json().categories;
      },
      (err => { console.error(err) }),
      () => {
        console.log('Categories fetched successfully.')
      });
  }

  async getPosts(): Promise<any> {
    //get the Wordpress posts from API 
    await this.http.get('https://public-api.wordpress.com/rest/v1.1/sites/kushandcakes.wordpress.com/posts/?number=50')
      .subscribe(res => {
        this.posts = res.json().posts;
        _.each(this.posts, (p) => {
          if (p.featured_image == null && p.attachment_count > 0) {
            p.featured_image = Object.keys(p.attachments).map(k => p.attachments[k].URL)[0]
          }
          else if(p.featured_image !== null && p.attachment_count == 0) {
            p.featured_image = 'https://loremflickr.com/600/480/city';
          }
          console.log(p.featured_image);
        })
      },
      (err => { console.error(err) }),
      () => {
        console.log('Posts fetched successfully.')
      });
  }

  async getSiteInfo(): Promise<any> {
    await this.http.get('	https://public-api.wordpress.com/rest/v1.2/sites/kushandcakes.wordpress.com/').subscribe(site => {
      this.site = site.json();
    });
  }


  viewPost(event, post: any) {
    this.navCtrl.push('PostDetailPage', { post: post });
  }


}

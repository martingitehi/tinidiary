import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  posts: any[];
  instagramImages: any;
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) { }

  ionViewDidLoad(){
    this.getWordpressPosts();
  }

  getWordpressPosts() {
    //get the Wordpress posts from API 
    this.http.get('https://public-api.wordpress.com/rest/v1.1/sites/kushandcakes.wordpress.com/posts/?number=5', { headers: this.headers }).map((items: any) => {
      console.log(items)
      this.posts = items.posts;
    });
  }

  itemTapped(event, item) {

  }
}

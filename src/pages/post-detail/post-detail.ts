import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-post-detail',
  templateUrl: 'post-detail.html',
})
export class PostDetailPage {
  post: any;
  comments: any[];
  comments_no:number;
  likes:number;
  constructor(public http: Http, public navParams: NavParams) {
    this.post = this.navParams.get('post');
  }

  ionViewDidLoad() {
    var x = document.getElementById("content").querySelectorAll("img");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].className = "card-image";
    }
    this.getPostComments();
  }

  async getPostComments() {
    //get the comments for this post from API 
    await this.http.get(`https://public-api.wordpress.com/rest/v1/sites/kushandcakes.wordpress.com/posts/${this.post.ID}/replies/?number=100`)
      .subscribe((res: any) => {
        console.log(res.json().comments);
        this.comments_no = res.json().found;
        this.likes = this.post.like_count;
        this.comments = res.json().comments;
      },
      (err => { console.error(`error: ${err}`) }),
      () => {
        console.log(`Comments fetched successfully.`)
      });
  }

}

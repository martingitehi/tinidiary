import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-post-detail',
  templateUrl: 'post-detail.html',
})
export class PostDetailPage {
  post: any;
  banner: string;
  comments: any[];
  comments_no: number;
  likes: number;
  constructor(public http: Http, public navParams: NavParams) {
    this.post = this.navParams.get('post');
    if (this.post.featured_image == null && this.post.attachment_count > 0) {
      this.post.featured_image = Object.keys(this.post.attachments)
        .map(k => this.post.attachments[k].URL)[0]
    }
    else if (this.post.featured_image !== null && this.post.attachment_count == 0) {
      this.post.featured_image = 'https://loremflickr.com/600/480/city';
    }
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

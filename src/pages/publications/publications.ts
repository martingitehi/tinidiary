import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Book } from '../../interfaces/book.interface';

@IonicPage()
@Component({
  selector: 'page-publications',
  templateUrl: 'publications.html',
})
export class PublicationsPage {
  books: Book[] = [];
  names: string[] = ['Kevin Mwachiro', 'Daniel Asinze-Riba', 'Kennedy Omwamo', 'Rebecca Douglas', 'Janet Mock', 'Martin Gitehi', 'Jhene Aiko-Chilombo', 'Kiprop Kimutai', 'Karanja Nzisa'];
  titles: string[] = [
    'Brian and Ethan', 'Evening Tea', 'The well Gods', 'We the Animals',
    'My Maasai', 'This Book is Gay', 'Loclomond Love', 'Tales of Heaven'
  ];
  filter: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  async ionViewWillLoad() {
    for (let i = 0; i < 10; i++) {
      await this.books.push({
        name: `files (${i + 1}).jpg`,
        type: 'book',
        title: this.titles[Math.ceil(Math.random() * ((this.titles.length+1) - 1) + 1)],
        for_sale: i % 2 == 0,
        price: Math.ceil(Math.random() * (5000 - 500) + 500),
        author: this.names[Math.ceil(Math.random() * ((this.names.length+1) - 1) + 1)]
      });
    }
    console.table(this.books)
  }

}

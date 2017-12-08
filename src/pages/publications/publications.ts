import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Book } from '../../interfaces/book.interface';
import { FileOpener } from '@ionic-native/file-opener';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';

@IonicPage()
@Component({
  selector: 'page-publications',
  templateUrl: 'publications.html',
})
export class PublicationsPage {
  books: Book[] = [];
  names: string[] = ['Kevin Mwachiro', 'Daniel Asinze-Riba', 'Kennedy Omwamo', 'Rebecca Douglas', 'Janet Mock', 'Martin Gitehi', 'Jhene Aiko-Chilombo', 'Kiprop Kimutai', 'Karanja Nzisa', 'Clara Domingo'];
  titles: string[] = [
    'Brian and Ethan', 'Evening Tea', 'The well Gods', 'We the Animals',
    'My Maasai', 'This Book is Gay', 'Loclomond Love', 'Tales of Heaven',
    'Learning to Live: A New Start', 'Conversations with Imaginary Friends'
  ];
  filter: string;
  constructor(public navCtrl: NavController, private toastCtrl: ToastController, private document:DocumentViewer, private fileOpener: FileOpener) {
  }

  async ionViewWillLoad() {
    for (let i = 0; i < 10; i++) {
      await this.books.push({
        name: `files (${i + 1}).jpg`,
        type: 'book',
        title: this.titles[i],
        for_sale: i % 2 == 0,
        price: Math.round(Math.ceil(Math.random() * (5000 - 500) + 500)),
        author: this.names[i]
      });
    }
    console.table(this.books)
  }

  filterByCategory(type: string) {
    this.books.filter(items => {
      if (type == 'free')
        return items.for_sale = false;
      else
        return items.for_sale = true;
    })
  }

  checkout() {

  }

  openDocument() {
    const options: DocumentViewerOptions = {
      title: 'My PDF',
      openWith: { enabled: true },
      bookmarks: { enabled: true },
      print: { enabled: true }
    }

    this.document.viewDocument('assets/books/Brian and Ethan.pdf', 'application/pdf', options, (cb)=>{
      console.log(cb);
    })

    this.fileOpener.appIsInstalled('com.tini.diary').then(() => {
      this.fileOpener.open('assets/books/Brian and Ethan.pdf', 'application/pdf')
    })
      .then(() => console.log(this.showToast('file opened')))
      .catch(e => console.log('Error openening file', console.log(e)));
  }

  showToast(text: string) {
    // let toast: Toast = this.toastCtrl.create({
    //   message: text, duration: 5000, dismissOnPageChange: false, showCloseButton: true, closeButtonText: 'Okay', position: 'middle'
    // });
    // toast.present();
    console.log(text)
  }
}

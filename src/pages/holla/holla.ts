import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

@IonicPage()
@Component({
  selector: 'page-holla',
  templateUrl: 'holla.html',
})
export class HollaPage {

  contacts: Array<{ name: string, id: string, icon: string }>;


  constructor(private call: CallNumber) {
    this.contacts = [
      { name: 'Mobile', id: '+254707912063', icon: 'call' },
      { name: 'Email', id: 'martingitehi@live.com', icon: 'mail' },
      { name: 'Skype', id: 'martingitehi@live.com', icon: 'logo-skype' }
    ]
  }

  callPhone(context: string) {
    if (context === 'mobile') {
      this.call.callNumber('+254707912063', true).then((c: any) => {
        //succeeded calling the number
      }, (err) => {
        console.error(err)
      })
    }
  }

}

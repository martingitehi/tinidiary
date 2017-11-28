import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
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

  callPhone(item: any) {
    if (item.name === "Mobile")
      this.call.callNumber(item.id, true);
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PagamentoPage } from '../pagamento/pagamento';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
pizzas(){
  this.navCtrl.push(HomePage)
}
pagamento(){
  this.navCtrl.push(PagamentoPage)
}
}

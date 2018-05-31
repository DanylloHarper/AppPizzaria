import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CarrinhoPage } from '../carrinho/carrinho';

@Component({
  selector: 'page-bebidas',
  templateUrl: 'bebidas.html'
})
export class BebidasPage {

  constructor(public navCtrl: NavController) {

  }
carrinho(){
  this.navCtrl.push(CarrinhoPage)
}
}

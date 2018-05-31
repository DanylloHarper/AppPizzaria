import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PizzasPage } from '../pizzas/pizzas';
import { PagamentoPage } from '../pagamento/pagamento';

@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html'
})
export class CarrinhoPage {

  constructor(public navCtrl: NavController) {

  }
pizzas(){
  this.navCtrl.push(PizzasPage)
}
pagamento(){
  this.navCtrl.push(PagamentoPage)
}
}

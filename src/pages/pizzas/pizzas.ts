import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BebidasPage } from '../bebidas/bebidas';

@Component({
  selector: 'page-pizzas',
  templateUrl: 'pizzas.html'
})
export class PizzasPage {

  constructor(public navCtrl: NavController) {

  }
bebidas(){
  this.navCtrl.push(BebidasPage)
}
}

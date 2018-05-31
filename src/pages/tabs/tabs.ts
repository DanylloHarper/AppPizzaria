import { Component } from '@angular/core';

import { BebidasPage } from '../bebidas/bebidas';
import { CarrinhoPage } from '../carrinho/carrinho';
import { PizzasPage } from '../pizzas/pizzas';
import { IntroPage } from '../intro/intro';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = IntroPage;
  tab2Root = PizzasPage;
  tab3Root = BebidasPage;
  tab4Root = CarrinhoPage;
  

  constructor() {

  }
}

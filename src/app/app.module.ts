import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { BebidasPage } from '../pages/bebidas/bebidas';
import { CarrinhoPage } from '../pages/carrinho/carrinho';
import { PizzasPage } from '../pages/pizzas/pizzas';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPage } from '../pages/intro/intro';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { PagamentoPage } from '../pages/pagamento/pagamento';


@NgModule({
  declarations: [
    MyApp,
    BebidasPage,
    CarrinhoPage,
    PizzasPage,
    TabsPage,
    IntroPage,
    CadastroPage,
    PagamentoPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BebidasPage,
    CarrinhoPage,
    PizzasPage,
    TabsPage,
    IntroPage,
    CadastroPage,
    PagamentoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

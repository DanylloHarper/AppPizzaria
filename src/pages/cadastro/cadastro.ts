import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  [x: string]: any;
  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParams: NavParams) {
  }
   
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }
  showalert() {
    let alert = this.alertCtrl.create({
      title: 'Cadastro Salvo!',
      subTitle: "Cadastro realizado com sucesso!",
      buttons: ['OK']
    });
    alert.present();
  }
}

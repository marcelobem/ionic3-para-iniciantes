import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nome_usuario:string = "Marcelo Bem";

  public objeto_feed = {
    titulo:"Marcelo Bem",
    data:"21 de Setembro",
    descricao:"Este App é muito legal!",
    qntd_likes:12,
    qntd_comments:4,
    time_comment: "11 horas atrás"
  }
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage :: ' + this.nome_usuario);
  }

}

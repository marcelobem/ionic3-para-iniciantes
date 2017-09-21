import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from "../../providers/moovie/moovie";

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
  providers: [
    MoovieProvider
  ]
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

  public lista_filmes = new Array<any>();
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MoovieProvider
  ) {
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data=>{
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results;
        console.log(this.lista_filmes);
      }, error => {
        console.log(error)
      }
    )
  }

}

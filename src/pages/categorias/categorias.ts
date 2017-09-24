import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriasProvider } from '../../providers/categorias/categorias';


/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
  providers: [
    CategoriasProvider
  ]
})
export class CategoriasPage {

  public lista_categorias = new Array<any>();
  public regiao:string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private categoriasProvider: CategoriasProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriasPage');

    this.categoriasProvider.getCategorias().subscribe(
      data=>{
        const response = (data as any);
        const objeto_response = JSON.parse(response._body);
        this.lista_categorias = objeto_response.results;

        this.regiao = objeto_response.regiao;

        console.log("resposta do provider categorias:");
        console.log(objeto_response);

        console.log("lista de categorias")
        console.log(this.lista_categorias);

        console.log("região atual")
        console.log(this.regiao);

      }, error=> {

      }
    );
  }

  getItems(ev:any){
    let val = ev.target.value;
    console.log("pesquisar: " + val);
  }

}

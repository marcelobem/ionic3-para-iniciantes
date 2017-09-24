import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CategoriasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoriasProvider {
  private baseApiPath:string = "http://feito.bem.digital/index.php/";
  constructor(public http: Http) {
    console.log('Hello CategoriasProvider Provider');
  }

  getCategorias(){
    console.log(this.baseApiPath + "categoria/listar");
    return this.http.get(this.baseApiPath + "categoria/listar");
  }

}

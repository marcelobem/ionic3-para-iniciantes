import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {
  private baseApiPath:string = "https://api.themoviedb.org/3";
  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatestMovies(){
    console.log(this.baseApiPath + "/movie/latest");
    return this.http.get(this.baseApiPath + "/movie/popular?api_key="+ this.getApiKey());
  }

  getApiKey():string {
    return "9f588e8cf70bf0976ab95f677c0f7103";
  }

}

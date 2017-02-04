import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubService{
  private username:string;
  private client_id = '80ab543f575fd4a5a1be';
  private client_secret = 'fdbc5a111bcb3aba2e19a5beabc2293beacd66d5';

  constructor(private _http: Http){
    console.log('GitHub Service Ready...');
    this.username = 'jaskinner';
  }

  getUser(){
    return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());
  }
  getRepos(){
    return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());
  }
  updateUser(username:string){
    this.username = username;
  }
}

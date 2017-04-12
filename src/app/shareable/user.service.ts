import { Injectable } from '@angular/core';
import {  Headers} from '@angular/http';
import { AuthService }       from './auth.service';

import {Observable} from 'rxjs';

import { HttpClientService } from '../shareable/http-client.service'

@Injectable()
export class UserService {
private user;
private userFull={};
private Url = 'http://localhost:8000/user';
private headers = new Headers({'Content-Type': 'application/json'});
 
  getUser(){
    return this.user;
  }
  public setUser(user){

   this.user=user;
  }
  private URL = 'http://localhost:8000/user/';  // URL to web api

  constructor(private http: HttpClientService) {


  }
    public getUserFull(){
       return this.userFull;
    }

  public refreshUserFull() : Observable<any> {
 
console.log(this.Url+"/"+this.user._id);
return this.http.get(this.Url+"/"+this.user._id)
.map(response => response.json()? this.userFull=response.json():false )
.catch(response=> Observable.throw('errrror'));


  }
    public addgrouptouser(userid,groupid) : Observable<any> {
 
console.log("URL :",this.Url+"/"+userid+"/group"+groupid);
return this.http.post(this.Url+"/"+userid+"/group",{id:groupid})
.map(response => response.json()? response.json():false )
.catch(response=> Observable.throw('errrror'));


  }
  public reloadUser(){
    var user = JSON.parse(localStorage.getItem("user"));
    return user ;
  }

  public follow(id){
    return this.http
          .get(this.URL+"/friend/"+id)
          .toPromise()
          .then(res =>true)
          .catch(res => false );
  }
  public unfollow(id){
    return this.http
          .delete(this.URL+"/friend/"+id)
          .toPromise()
          .then(res =>true)
          .catch(res => false );

  }


}

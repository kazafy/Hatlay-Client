import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class UserService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private postsUrl = 'http://localhost:8000/post';  // URL to web api
  constructor(private http: Http) { }



}

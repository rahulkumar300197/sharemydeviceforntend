import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class RestService {
  url = 'http://ec2-13-127-185-75.ap-south-1.compute.amazonaws.com:8080/api/v1/resetpasswordbytoken';
  constructor(private http: Http) { }

  resetpasswordbytoken(token, password) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    const body = {
      'token': token,
      'password': password
    };
    console.log('Body', JSON.stringify(body));
    return this.http.post(this.url, body, options)
      .map(req => req.json());
  }
}

// import { Injectable } from '@angular/core';
// import { Response, RequestOptions, Headers, Http, URLSearchParams } from '@angular/http';
// import 'rxjs/add/operator/map';

// @Injectable()
// export class RestService {
//   public headers = new Headers({
//     'Content-Type': 'application/json'
//   });
//   public options = new RequestOptions({ headers: this.headers });

//   constructor(private http: Http) {
//     console.log('Rest Service Initilzed');
//   }

//   // resetpasswordbytoken(token, password) {
//   //   console.log('inside api call');
//   //   const body = {
//   //     'token': token,
//   //     'password': password
//   //   };
//   //   this.http.post('http://ec2-13-127-185-75.ap-south-1.compute.amazonaws.com:8080/api/v1/resetpasswordbytoken', body, this.options)
//   //     .subscribe(res => {
//   //       console.log(JSON.stringify(res.json));
//   //       return res.json;
//   //     });
//   // }
//   resetpasswordbytoken(token, password) {
//   }
// }
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
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }
  private extractData(res: Response) {
    const body = res.json();
      return body || {};
  }
  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
  private handleErrorPromise (error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
}

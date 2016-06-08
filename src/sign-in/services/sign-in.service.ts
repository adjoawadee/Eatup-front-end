/**
 * Created by Adjoa on 5/29/2016.
 */
import {Injectable} from  "@angular/core";
import {Http,Headers} from "@angular/http";
import { Headers, RequestOptions } from '@angular/http';
import {Route} from '@angular/router';

@Injectable()

export class SignInService {
    constructor(private _http: Http){}

    postData(data:any){
        const body = JSON.stringify(data);
        console.log(data);
        const headers= new Headers();
        headers.append('Content-Type','application/json');
        return this._http.post('https://testing-angular-2.firebaseio.com/datatest.json', body, {headers:headers});
    }
}
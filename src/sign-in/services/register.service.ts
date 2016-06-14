/**
 * Created by Adjoa on 6/14/2016.
 */
import {Injectable} from  "@angular/core";
import {Http,Headers} from "@angular/http";
import { Headers, RequestOptions } from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';


@Injectable()

export class RegisterService{
    public isLoggedIn:boolean;
    
    constructor(private _http: Http){
        this.isLoggedIn = false;
    }

    Register(data:any) {
        const body = JSON.stringify(data);
        console.log(data);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('https://testing-angular-2.firebaseio.com/user.json', body, {headers: headers});
        
    }

    Login(_username:string):Observable<any> {
        return this._http.get(`http://192.168.20.17:8080/webshop/api/user/name/${_username}`)
            .map(res => res.json());
    }

}
/**
 * Created by Adjoa on 6/12/2016.
 */
import {Injectable} from  "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()

export class LoginService {
    constructor(private _http:Http) {
    }


    getData(username:string):Observable<any> {
        return this._http.get(`http://192.168.20.17:8080/webshop/api/user/name/${username}`)
            .map(res => res.json());
    }

}
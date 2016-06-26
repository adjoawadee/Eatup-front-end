/**
 * Created by Adjoa on 6/26/2016.
 */
import {Injectable} from  "@angular/core";
import {Http,Headers, URLSearchParams, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';


@Injectable()

export class ItemService
{
    constructor(private _http:Http){}

    GetAllItems()
    {
        const headers = new Headers();
        headers.append('Content-type','application/json');
        return this._http.get("http://192.168.20.17:8080/webshop/api/item",{headers:headers})
            .map(res => res.json());
    }
}
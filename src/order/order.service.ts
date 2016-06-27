/**
 * Created by Adjoa on 6/27/2016.
 */
import {Injectable} from  "@angular/core";
import {Http,Headers, URLSearchParams, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()

export class OrderService
{
    constructor(private _http:Http){}

    GetOrderBasket(username:string):Observable<any>
    {
        const UrlBuilder = `http://192.168.20.17:8080/webshop/api/order/owner/`+username;
        console.log(UrlBuilder);
        
        return this._http.get(UrlBuilder)
            .map((res)=>{
                if(res)
                {
                    if(res.status === 200)
                        return [{res: Response=>res.json()}];
                    console.log("200:"+res);
                }})
            .catch((error:any)=>{
                if (error.status === 500) {
                    return Observable.throw(new Error(error.status));
                }
                else if (error.status === 400) {
                    return Observable.throw(new Error(error.status));
                }
                else if (error.status === 401) {
                    console.log("error");
                    //set bool = false
                    return Observable.throw(new Error(error.status));

                }
                else if (error.status === 406) {
                    return Observable.throw(new Error(error.status));
                }
            })
    }
}
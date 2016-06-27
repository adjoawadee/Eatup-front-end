/**
 * Created by Adjoa on 6/26/2016.
 */
import {Injectable} from  "@angular/core";
import {Http,Headers, URLSearchParams, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import {Item} from "../items/item.ts";
import {OrderList} from "../order/OrderList.ts";
import {OrderBasket} from "../order/OrderBasket.ts";


@Injectable()

export class HomeService
{
    constructor(private _http:Http){}
    public item:Item;
    public order:OrderBasket;
    public hasNoError = true;

    AddItemToOrder(username:string,_item:Item)
    {
        const body = JSON.stringify(_item);
        this.item = _item;
        console.log(body);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post(`http://192.168.20.17:8080/webshop/api/order/additem?username=`+username,body,{headers:headers})
            .map(res=>res);
    }
    
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
                    //set true
                    this.hasNoError = true
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
                    this.hasNoError = false;
                    console.log(this.hasNoError);
                    return Observable.throw(new Error(error.status));

                }
                else if (error.status === 406) {
                    return Observable.throw(new Error(error.status));
                }
            })
    }
}
/**
 * Created by Adjoa on 6/14/2016.
 */
import {Injectable} from  "@angular/core";
import {Http,Headers, URLSearchParams, Response} from "@angular/http";
// import { Headers, RequestOptions } from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import {User} from "../../../app/User.ts";
import {map} from "rxjs/operator/map";



@Injectable()

export class RegisterService{
    public isLoggedIn:boolean;
    public userDetails:any;
    public newUser = new User("","","",null);
    constructor(private _http: Http){
        this.isLoggedIn = false;
    }


    Register(data:any) {
        const body = JSON.stringify(data);
        // console.log(data);
        this.userDetails = data;
        // console.log("userdets: "+this.userDetails.username);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post(`http://192.168.20.17:8080/webshop/api/user/create?username=`+data.username+`&password=`
                                +data.password+`&email=`+data.email+`&city=`+data.city+`&housenumber=`+data.housenumber+
                                `&street=`+data.street, body, {headers: headers}
        );
    }
    

    Login(data:any){
        const body = JSON.stringify(data);
        // console.log(data);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post(`http://192.168.20.17:8080/webshop/api/user/login?username=`
            +data.username+`&password=`+data.password, body,{headers:headers})
            .map(res => res.json());
            // .subscribe(_data=>this.newUser=_data,
            //             err => console.log(err));
        // console.log(this.newUser);
        // console.log(JSON.stringify(this.newUser));



    }
}
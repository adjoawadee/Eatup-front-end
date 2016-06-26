import {Component} from "@angular/core";
import {Tabs} from './tab/tabs.ts';
import {Tab} from './tab/tab.ts';
import {Router} from '@angular/router';
import {RegisterService} from "./services/register.service.ts";
import {User} from "../../app/User";

@Component({
    selector: 'sign-in-page',
    templateUrl: "./src/sign-in/sign-in.component.html",
    directives: [Tabs, Tab]
})


export class SignInComponent{
    response: string;
    isValid = false;
    // user:string;
    user = new User("","","",null);
    

    constructor(private _registerService: RegisterService, private _router:Router){}
    
    onPost(username:string, email:string, password:string, housenumber:string, street:string, city:string)
    {
        const data = {
            username:username,
            email:email,
            password:password,
            housenumber:housenumber,
            street:street,
            city:city
        }
        if (data == null)
          this.isValid == false;

        else {
            this.isValid == true;
            this._registerService.Register(data)
                    .subscribe(
                                data=> this.response = JSON.stringify(data),
                error => console.log(error)),
                data=>console.log(data);
                localStorage.setItem('user', JSON.stringify(data)
                );
            
            if(localStorage.getItem("user") != null) {
                this._registerService.isLoggedIn = true;
                this._router.navigate(['/']);
            }
            else
            //replace this with a page
                alert("Sign in with a correct name!");
            
        }
    }
    
    onLogin(_username:string, _password:string)
    {
        const data = {
            username:_username,
            password:_password,
            }
         let temp:string;

        this._registerService.Login(data)
            .subscribe(
                response => {
                    this.user = response;
                    console.log(this.user);
                    temp = '{"username"'+':'+'"'+this.user.username+'",'+
                            '"email"'+':'+'"'+this.user.email+'",'+
                            '"addition"'+':'+'"'+this.user.address.addition+'",'+
                            '"city"'+':'+'"'+this.user.address.city+'",'+
                            '"housenumber"'+':'+'"'+this.user.address.housenumber+'",'+
                            '"street"'+':'+'"'+this.user.address.street+'"}';

                    localStorage.setItem("user", temp);
                    console.log("local"+localStorage.getItem("user"));
                    console.log(this.user.address.city);
                    this._router.navigate(['/']);

                }
            )
        // if(localStorage.getItem("user")!=null)
        // {
        //     // localStorage.setItem("user", JSON.stringify(this.user));
        //     // console.log("local2"+localStorage.getItem("user"));
        //     this._registerService.isLoggedIn = true;
        //     this._router.navigate(['/order']);
        // }
        // else
        // {
        //     alert("Please enter correct details");
        // }
            //     //         localStorage.setItem("user", JSON.stringify(this.newUser))
            //     //         this._registerService.isLoggedIn = true;
            //     //         this._router.navigate(['/order']);
        // console.log(this.response);
        // console.log(JSON.stringify(this.user));
        //
        // console.log(this._registerService.newUser);
        // console.log(JSON.stringify(this._registerService.newUser));
        // subscribe(
        //     // data=> this.response = JSON.stringify(this)
        //     this._registerService.newUser=JSON.parse(this.response)
        // );
        //
        // // this.newUser = JSON.parse(res))
        // //     data => {
        // //         console.log(JSON.stringify(data));
        // //         this.response = JSON.stringify(data)
        // //         localStorage.setItem("user",JSON.stringify(data));
        // //         //localStorage.removeItem("user");
        // //
        // //     },
        // //     error=> console.log(error)
        // console.log(JSON.stringify(this._registerService.newUser));
        // // this.newUser = JSON.parse();
        // // this.newUser=this._registerService.userDetails;
        // // this.newUser = this._registerService.GetUser(_username);
        // //     console.log(JSON.stringify(this.newUser));
        //     //  if(this.newUser!=null){
        //     //         localStorage.setItem("user", JSON.stringify(this.newUser))
        //     //         this._registerService.isLoggedIn = true;
        //     //         this._router.navigate(['/order']);
        //     //     }
        //     //
        //     // else
        //     // {
        //     //     // replace this with a page
        //     //     alert("Sign in with a correct name!");
        //     // }
        }
    }



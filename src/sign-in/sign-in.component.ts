import {Component} from "@angular/core";
import {Tabs} from './tab/tabs.ts';
import {Tab} from './tab/tab.ts';
import {Router} from '@angular/router';
import {RegisterService} from "./services/register.service.ts";


@Component({
    selector: 'sign-in-page',
    templateUrl: "./src/sign-in/sign-in.component.html",
    directives: [Tabs, Tab]
})


export class SignInComponent{
    response: string;
    isValid = false;
    user:string;

    constructor(private _registerService: RegisterService, private _router:Router){}
    
    onPost(name:string, username:string, email:string, password:string)
    {
        // console.log("fv:"+ form.value.name);
        // console.log("form:" + form);

        const data = {
            name:name,
            username:username,
            email:email,
            password:password
        }

        if (data == null)
          this.isValid == false;

        else {
            this.isValid == true;
            this._registerService.Register(data).subscribe(
                data=> this.response = JSON.stringify(data),
                error => console.log(error)),
                localStorage.setItem('user', JSON.stringify(data)
                );

            if(localStorage.getItem("user") != null) {
                this._registerService.isLoggedIn = true;
                this._router.navigate(['/order']);
            }
            else

            //replace this with a page
                alert("Sign in with a correct name!");



        }}


    
    onLogin(_username:string)
    {
        // console.log(_username);
        this._registerService.Login(_username).
            subscribe(
                    data => {
                                console.log(JSON.stringify(data));
                                this.response = JSON.stringify(data)
                                localStorage.setItem("user",JSON.stringify(data));
                        //localStorage.removeItem("user");

                            },
            error=> console.log(error)
                    )
        if(localStorage.getItem("user") != null) {
            this._registerService.isLoggedIn = true;
            this._router.navigate(['/order']);
        }
        else

            //replace this with a page
            alert("Sign in with a correct name!");



    }
}
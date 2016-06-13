import {Component} from "@angular/core";
import {Tabs} from './tab/tabs.ts';
import {Tab} from './tab/tab.ts';
import {SignInService} from "./services/sign-in.service.ts";
import {Router} from '@angular/router';
import {LoginService} from "./services/login.service.ts";


@Component({
    selector: 'sign-in-page',
    templateUrl: "./src/sign-in/sign-in.component.html",
    directives: [Tabs, Tab],
    providers:[SignInService,LoginService]
})


export class SignInComponent{
    response: string;
    isValid = false;
    user:string;

    constructor(private _signinService: SignInService, private _loginService: LoginService, private _router:Router){}
    
    onPost(form, username)
    {
        if (form== null)
          this.isValid == false;

        else {
            this.isValid == true;
            this._signinService.postData(form).subscribe(
                data=> this.response = JSON.stringify(form),
                error => console.log(error)),
                localStorage.setItem('user', JSON.stringify(form)
                );
        }}


    
    onLogin(username)
    {
        // console.log(user);
        this._loginService.getData(username).
            subscribe(
            data => {
                console.log(data);
                this.response = JSON.stringify(data)
                localStorage.setItem("user",JSON.stringify(data));
            },
            error=> console.log(error)
        )
        this._router.navigate(['/order']);
    
    
    
    }
}
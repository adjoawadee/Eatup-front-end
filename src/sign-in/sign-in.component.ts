import {Component} from "@angular/core";
import {Tabs} from './tab/tabs.ts';
import {Tab} from './tab/tab.ts';
import {SignInService} from "./services/sign-in.service.ts";
import {Router} from '@angular/router';

@Component({
    selector: 'sign-in-page',
    templateUrl: "./src/sign-in/sign-in.component.html",
    directives: [Tabs, Tab],
    providers:[SignInService]

})


export class SignInComponent{
    response: string;

    constructor(private _signinService: SignInService, private _router:Router){}
    
    onPost(name: string, username: string, email:string, password:string)
    {
        const data =
        {
            name:name,
            username:username,
            email:email,
            password:password
        };
        
        this._signinService.postData(data).
        subscribe(
            data => this.response = JSON.stringify(data),
            error => console.log(error),
            data=>console.log(data));
        this._router.navigate(['/order']); 



    }
   
}
import {Component,OnInit,Injector} from "@angular/core";
import {Router} from '@angular/router';
import {User} from "../../app/User.ts";
import {RegisterService} from "../sign-in/services/register.service.ts";
import {Address} from "../../app/Address.ts";
import {SignInComponent} from "../sign-in/sign-in.component.ts";


@Component({
    selector: 'order-page',
    templateUrl: "./src/order/order.component.html",
    styleUrls: ["./src/order/order.component.css"],
    providers:[SignInComponent]
})

export class OrderComponent implements OnInit{

    // private newUser = new User("","","",new Address("","","",""));
    constructor(private _registerService:RegisterService, private _router:Router, private _signInComponent:SignInComponent){}

    ngOnInit():any {
        // console.log(this._signInComponent.user.address.city);
       // if(this._registerService.isLoggedIn==false)
       //      this._router.navigate(['/sign-in']);
       //  else
       // {
       //     if(this._signInComponent.user!=null)
       //     {
       //         this.newUser = this._signInComponent.user
       //         console.log("user"+this.newUser);
       //     }
       //     else {
       //         this.newUser = JSON.parse(this._signInComponent.response)
       //         console.log("res"+this.newUser);
       //     }
       // }
    }


}



//     constructor(private _router: Router) {}
//     if(this._registerService.isLoggedIn === false)
//     this._router.navigate(['/sign-in']);
//
//     else {
//     const _myUser = localStorage.getItem("user");
//     if (_myUser == null) {
//     alert("Please log in");
// }
//
// else {
//     this.newUser = JSON.parse(_myUser);
// }
// }
// }
// }
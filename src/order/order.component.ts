import {Component,OnInit,Injector} from "@angular/core";
import {Router} from '@angular/router';
import {User} from "../../app/User.ts";
import {RegisterService} from "../sign-in/services/register.service.ts";
import {Address} from "../../app/Address";


@Component({
    selector: 'order-page',
    templateUrl: "./src/order/order.component.html",
    styleUrls: ["./src/order/order.component.css"]
})

export class OrderComponent implements OnInit{


    private newUser = new User("","","",new Address("","","",""));

    constructor(private _registerService:RegisterService, private _router:Router){}

    ngOnInit():any {

        if(this._registerService.isLoggedIn === false)
            this._router.navigate(['/sign-in']);

        else {
            const _myUser = localStorage.getItem("user");
            if (_myUser == null) {
                alert("Please log in");
            }

            else {
                 this.newUser = JSON.parse(_myUser);
            }
        }
    }
}
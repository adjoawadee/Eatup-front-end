import {Component,OnInit,Injector} from "@angular/core";
import {Router} from '@angular/router';
import {User} from "../../app/User.ts";
import {RegisterService} from "../sign-in/services/register.service.ts";
import {Address} from "../../app/Address.ts";
import {SignInComponent} from "../sign-in/sign-in.component.ts";
import {OrderService} from "./order.service.ts";
import {OrderList} from "./OrderList.ts";


@Component({
    selector: 'order-page',
    templateUrl: "./src/order/order.component.html",
    styleUrls: ["./src/order/order.component.css"],
    providers:[SignInComponent,OrderService]
})

export class OrderComponent implements OnInit{

    private newUser = new User("","","",new Address("","","",""));
    private _localUser:User;
    private orderList:OrderList;
    
    constructor(private _registerService:RegisterService, private _router:Router, private _signInComponent:SignInComponent,
                private _orderService:OrderService){}

    ngOnInit():any {

        console.log(localStorage.getItem("user"));
        this._localUser = JSON.parse(localStorage.getItem("user"));

        if(this._localUser == null)
        {
            this.newUser = new User("null","null","null",new Address("null","null","null","null"));
            alert("redirect to Login page");
            this._router.navigate(['/sign-in']);
        }
        else
        {
            this.newUser = JSON.parse(localStorage.getItem("user"));
            console.log(this.newUser);
            
            //get all the orders for this.newUser.
            this._orderService.GetOrderBasket(this.newUser.username)
                .subscribe(
                    response => {
                        this.orderList = response;
                        console.log(this.orderList)}
                )
        }
    }


}

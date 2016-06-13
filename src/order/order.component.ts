import {Component,OnInit,Injector} from "@angular/core";
import {Router} from '@angular/router';


@Component({
    selector: 'order-page',
    templateUrl: "./src/order/order.component.html",
    styleUrls: ["./src/order/order.component.css"]
})

export class OrderComponent implements OnInit{
    ngOnInit():any {
        return null;
    }

    constructor(private _router: Router) {}

}
import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component, OnInit, provide} from '@angular/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes, Router} from "@angular/router";
import {HTTP_PROVIDERS } from '@angular/http';
import {WorkComponent} from "../src/work/work.component.ts";
import {OrderComponent} from "../src/order/order.component.ts";
import {SignInComponent} from "../src/sign-in/sign-in.component.ts";
import {HomeComponent} from "../src/home/home.component.ts";
import {RegisterService} from "../src/sign-in/services/register.service.ts";


import {APP_BASE_HREF, HashLocationStrategy, LocationStrategy, Location} from '@angular/common';

///<reference path="/assets/jquery.d.ts" />

import jQuery = require('jquery');
import {RestaurantComponent} from "../src/restaurant/restaurant.component.ts";
import {ItemComponent} from "../src/items/item.component.ts";
import {ItemService} from "../src/items/item.service.ts";




@Component({
    selector: 'my-app',
    templateUrl: './src/app.component.html',
    directives:[WorkComponent, OrderComponent, SignInComponent, ItemComponent, ROUTER_DIRECTIVES]
})

@Routes([
    {path: '/', name:'Home', component: HomeComponent},
    {path: '/work', name:'Work', component: WorkComponent},
    {path: '/order', name:'Order', component: OrderComponent},
    {path: '/sign-in', name:'Sign-In', component: SignInComponent},
    {path: '/restaurant', name:'Restaurant', component: RestaurantComponent},
    {path: '/item', name:'Item', component: ItemComponent}
    // {path: '/sign-in-from', name:'Sign-In-Form', component: SignInFormComponent}
])

export class AppComponent implements OnInit{
    public clicked:boolean;
    constructor(private router: Router) {}

    ngOnInit():any {
        this.router.navigate(['/']);
        this.clicked =false;
        console.log('on init');
        localStorage.removeItem("user");
    }

    public onClick($event:Event){
        $('.menu_body').toggle(500);
        this.clicked = true;
    }

    public onLiClick($event:Event)
    {
        if(this.clicked)
        {
            this.clicked = false;
            $(".menu_body").hide(500);
        }
    }
}
bootstrap(AppComponent,[ provide(APP_BASE_HREF, { useValue: "/" }),
        ROUTER_PROVIDERS, HTTP_PROVIDERS, RegisterService, ItemService,
    provide(LocationStrategy, {useClass: HashLocationStrategy})]);


import {Component, OnInit, Input} from "@angular/core";
import {Address} from "../../app/Address.ts";
import {User} from "../../app/User.ts";
import {Item} from "../items/item.ts";
import {ItemService} from "../items/item.service.ts";
import {HomeService} from "./home.service.ts";
import {OrderList} from "../order/OrderList.ts";
import {OrderBasket} from "../order/OrderBasket.ts";

@Component({
    selector: 'home-page',
    templateUrl: "./src/home/home.html",
    providers: [ItemService,HomeService]
})

export class HomeComponent implements OnInit{

    @Input()
    myitem:Item;
    orderbasket:OrderBasket;
    orderlist:OrderList;

    private addItemRes:any;
    private newUser= new User("","","",new Address("","","",""));
    private temp = this.newUser.username;

    private _localUser:User;


    private status:number;

    constructor(private _itemService:ItemService, private _homeService:HomeService){}
    private item:Item[];

    ngOnInit():any {
        console.log(this._homeService.hasNoError);
        console.log(this.temp);
        
        this._localUser = JSON.parse(localStorage.getItem("user"));
        console.log(this._localUser);

        if(this._localUser == null) {
            this.newUser.username = ("Please Log in");
        }
        else
            this.newUser.username = this._localUser.username;
        console.log(this.newUser.username);


        this._itemService.GetAllItems()
            .subscribe(
                response => {
                    this.item = response;
                    console.log(this.item)});
    }
    
    onAdd(_userName:string, _item:Item)
    {
        console.log(_userName);
        //you want to first check if the username is Please log in
        if(_userName == "Please Log in")
        //if it is, alert to log in.
            alert("Please log in");
        //if it's not, check if they have a basket homeservice.getorderbasket.
        else
        {
            this._homeService.AddItemToOrder(_userName,_item)
                .subscribe(
                    response =>{
                        this.addItemRes = response;
                        console.log(this.addItemRes);
                    }
                )
        }
    }
}
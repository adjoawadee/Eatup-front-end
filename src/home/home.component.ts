import {Component, OnInit} from "@angular/core";
import {Address} from "../../app/Address.ts";
import {User} from "../../app/User.ts";
import {Item} from "../items/item.ts";
import {ItemService} from "../items/item.service.ts";

@Component({
    selector: 'home-page',
    templateUrl: "./src/home/home.html",
    providers: [ItemService]
})

export class HomeComponent implements OnInit{

    private newUser= new User("","","",new Address("","","",""));
    private temp = this.newUser.username;

    private _localUser:User;

    constructor(private _itemService:ItemService){}
    private item:Item[];

    ngOnInit():any {
        console.log(this.temp);

        // this.newUser.username = "";
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
    
    onAdd(userName:string, itemName:String)
    {
        
    }


}
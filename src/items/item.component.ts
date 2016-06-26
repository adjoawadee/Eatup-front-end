import {Component, OnInit} from "@angular/core";
import {ItemService} from "./item.service.ts";
import {Item} from "./item.ts";


@Component({
    selector: 'rest-item',
    templateUrl: "./src/items/item.html",
    providers:[ItemService]
})

export class ItemComponent implements  OnInit{

    constructor(private _itemService:ItemService){}
    private item:Item[];

    ngOnInit():any {
        this._itemService.GetAllItems()
            .subscribe(
                response => {
                    this.item = response;
                    console.log(this.item)});
    }



}
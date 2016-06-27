import {OrderList} from "./OrderList.ts";
/**
 * Created by Adjoa on 6/27/2016.
 */

export interface OrderBasket {
    iD: number;
    OrderList: OrderList[];
    owner: string;
}
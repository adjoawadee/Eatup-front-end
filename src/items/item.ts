/**
 * Created by Adjoa on 6/26/2016.
 */
import {Injectable} from  "@angular/core";

@Injectable()
export interface Item {
    bidPrice: number;
    iD: number;
    name: string;
    price: number;
    resteurant: string;
}
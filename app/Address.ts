/**
 * Created by Adjoa on 6/14/2016.
 */
export class Address {
    street:string;
    housenumber:string;
    addition:string;
    city:string;


    constructor(street:string, housenumber:string,addition:string,city:string) {
        this.street = street;
        this.housenumber = housenumber;
        this.addition = addition;
        this.city = city;
    }

    public static createEmptyAddress():Address {
        return new Address("","","","");
    }

}

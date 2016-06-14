import {Address} from "./Address";
/**
 * Created by Adjoa on 6/14/2016.
 */
export class User {
    name:string;
    username:string;
    email:string;
    address:Address;



    constructor(name:string, username:string, email:string, address:Address) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
    }

    public static createEmptyUser():User{
        return new User("","","",null);
    }
}

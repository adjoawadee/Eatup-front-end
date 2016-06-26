/**
 * Created by Adjoa on 6/16/2016.
 */
export interface Address {
    addition: number;
    city: string;
    housenumber: number;
    street: string;
}

export interface RootObject {
    address: Address;
    email: string;
    password: string;
    username: string;
}

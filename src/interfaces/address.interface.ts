
export interface Address {
    firstName: string;
    lastName: string;
    address: string;
    address2?: string;
    postalCode: string;
    city: string;
    country: string;
    phone: string;
}
export interface UserAddress {
    id?: string;
    firstName: string;
    lastName: string;
    userId: string;
    address: string;
    address2?: string;
    postalCode: string;
    city: string;
    country: string;
    phone: string;
}
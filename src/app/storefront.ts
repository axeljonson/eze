import { StorefrontProduct } from './storefront-product'

export class Address {
    address_line_1: string;
    address_line_2: string;
    admin_area_2: string;
    admin_area_1: string;
    postal_code: string;
    country_code: string;
}
export class Storefront {
    clientId: string;
    name: string;
    products: Array<StorefrontProduct>;
    address: Address
}

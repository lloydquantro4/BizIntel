import { Customer } from './customer';

export interface Order {
    id: number;
    customer: Customer;
    total: number;
    orderplaced: Date;
    ordercompleted: Date;
}
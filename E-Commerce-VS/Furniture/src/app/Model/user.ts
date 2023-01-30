export class User{
    customerId?:string
    customerName?:string
    email?:string
    phoneNumber?:number
    password?:string
    confirmPassword?:string;

    constructor(){
    this.customerId='';
    this.customerName='';
    this.email='';
    this.phoneNumber=0;
    this.password='';
    this.confirmPassword='';
    }
}

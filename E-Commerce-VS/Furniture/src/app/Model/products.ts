export class Products {
  email?:string
  furnitureCode?:number
  furnitureName?:string
  furnitureType?:string
  furnitureDescription?:string
  furniturePrice?:number
  isFurnitureAvailable?:boolean
    constructor(){
      this.email="";
        this.furnitureCode=0;
        this.furnitureName='';
        this.furnitureType='';
        this.furnitureDescription='';
        this.furniturePrice=0;
        this.isFurnitureAvailable=false
    }
}

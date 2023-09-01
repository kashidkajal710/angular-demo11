import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  isShow:boolean=false;
  productObj: Product = new Product();

  productList: Product[] = [
    { productId: 1, productName: "Tv", productPrice: 40000 },
    { productId: 2 ,productName:"Moblie",productPrice:55555},
  ]
  addProduct(){
this.isShow=true;
  }
  hideProduct(){
this.isShow=false;
  }
  saveProduct(){
  this.productObj.productId=this.productList.length+1;
  this.productList.push(this.productObj)
  this.productObj=new Product()
  this.isShow=false
}  
deleteProduct(id:number){
this.productList=this.productList.filter(item=>item.productId!==id)
console.log(this.productList)
}
onEdit(){

}
}
class Product {
  productId!: number;
  productName!: string;
  productPrice!: number;
}

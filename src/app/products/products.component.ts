import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  
 
  id:number=0;
title:string='';
price:number=0;
quantity:number=0 ;
like:number=0;

listProdcut=[
  {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
  {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
  {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ]


  constructor() { }

  
  searchText=100;

  addLike(i:number){
    this.like=this.like+1;
    this.listProdcut[i].like=this.like+1;

  }

  Buy(i:number){
    if(this.listProdcut[i].quantity>0){

      this.listProdcut[i].quantity=this.listProdcut[i].quantity-1;
    }

    
    

  }
  

  ngOnInit(): void {
    this.listProdcut;
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class CartService {
  itens=[]

  addToCart(product){
    this.itens.push(product);
  }

  getItens(){
    return this.itens;
  }

  clearCart(){
    this.itens=[];
    return this.itens;
  }
}
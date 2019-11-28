import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn:'root'
})
export class CartService {
  itens=[];

  /* Inject do httpclient no construtor*/
  constructor( private http: HttpClient ){

  }
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

  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }
}
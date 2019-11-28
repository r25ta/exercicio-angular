import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  /*Propriedades / Atributos da classe */
  itens;
  checkoutForm;

  /* Inject dos componentes CartService e FormBuilder */
  constructor(
    private cartService : CartService,
    private formBuilder : FormBuilder,
  
  ) { 
    this.itens = this.cartService.getItens();
    
    /*Definindo os campos do formulario utilizando um grupo de propriedades */
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });

  }

  ngOnInit() {
  }

  onSubmit(customerData){
    console.warn('Seu pedido está sendo encaminhado',customerData);
    this.itens = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}
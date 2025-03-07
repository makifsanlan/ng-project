import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { CartItems } from '../models/cartItems';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product:Product) {
    let item =CartItems.find(c=>c.product.productId===product.productId);
    if(item){
      item.quantity++;
    }else{
      let cartItem =new CartItem();
      cartItem.quantity = 1;
      cartItem.product = product;  
      CartItems.push(cartItem)
    }
   
  }  

  removeFromCart(product:Product){
    let item = CartItems.find(c=>c.product.productId === product.productId);
    if(item){
      if(item.quantity>1){
        item.quantity--;
      }else{
        CartItems.splice(CartItems.indexOf(item),1)
      } 
    }
  }

  list():CartItem[]{
    return CartItems;
  }
}

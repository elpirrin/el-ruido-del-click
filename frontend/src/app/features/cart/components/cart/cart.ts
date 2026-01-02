import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
cartItems = [
    {
      id: 1,
      name: 'Producto Ejemplo 1',
      price: 29.99,
      quantity: 2,
      image: 'assets/images/center-home/imagen001-oferta-center-home.png'
    },
    {
      id: 2,
      name: 'Producto Ejemplo 2',
      price: 49.99,
      quantity: 1,
      image: 'assets/images/center-home/imagen001-oferta-center-home.png'
    },
    {
      id: 3,
      name: 'Producto Ejemplo 3',
      price: 19.99,
      quantity: 3,
      image: 'assets/images/center-home/imagen001-oferta-center-home.png'
    }
  ];

  subtotal = 139.94;
  tax = 29.39;
  total = 169.33;
  //añadir funcionalidad para quitar producto, restar / sumar cantidad , y actualizar los precios.


  currentStep = 1;

  goToStep(step: number) {
    this.currentStep = step;
    window.scrollTo({ top: 0, behavior: 'smooth' }); // hace scroll al inicio
  }
}
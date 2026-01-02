import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-grid',
  imports: [CommonModule],
  templateUrl: './product-grid.html',
  styleUrl: './product-grid.scss',
})
export class ProductGrid {
@Input() productos: { nombre: string; descripcion: string; precio: string; imagen: string; reacondicionado: boolean; }[] = [];//sirve para poder recibir los productos.
}
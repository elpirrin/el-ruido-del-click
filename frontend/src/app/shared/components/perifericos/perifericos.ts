import { Component, Input } from '@angular/core';
import { ProductGrid } from '../product-grid/product-grid';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perifericos',
  imports: [ProductGrid, CommonModule],
  templateUrl: './perifericos.html',
  styleUrl: './perifericos.scss',
})
export class Perifericos {
  @Input() perifericos: { nombre: string; descripcion: string; marca : string; precio: string; imagen: string; reacondicionado: boolean; }[] = [];//sirve para poder recibir los perifericos.
  orden: 'barato' | 'caro' | 'novedades' | 'oferta' = 'barato';
  // Estado mínimo para mostrar/ocultar los filtros de productos en móvil
  mobileFiltersOpen = false;

  toggleFilters() {
    this.mobileFiltersOpen = !this.mobileFiltersOpen;
  }

  closeFilters() {
    this.mobileFiltersOpen = false;
  }

}
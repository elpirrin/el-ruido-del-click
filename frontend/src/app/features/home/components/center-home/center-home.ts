import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductGrid } from '../../../../shared/components/product-grid/product-grid';

@Component({
  selector: 'app-center-home',
  imports: [CommonModule, ProductGrid],
  templateUrl: './center-home.html',
  styleUrl: './center-home.scss',
})
export class CenterHome {
  slides: string[] = [
    'assets/images/center-home/slide001-center-home.png',
    'assets/images/center-home/slide002-center-home.png',
    'assets/images/center-home/slide003-center-home.png',
  ];
  
  currentIndex = 0;

  productos = [
    {
      nombre: 'Teclado Mecánico RGB',
      descripcion: 'Switches mecánicos, iluminación RGB y diseño premium.',
      precio: '89,99 €',
      imagen: 'assets/images/center-home/imagen001-oferta-center-home.png',
      reacondicionado : false
    },
    {
      nombre: 'Ratón Gaming Pro',
      descripcion: 'Alta precisión y ergonomía avanzada.',
      precio: '59,99 €',
      imagen: 'assets/images/producto2.jpg',
      reacondicionado : false
    },
    {
      nombre: 'Monitor 27" QHD',
      descripcion: 'Resolución QHD y 165Hz para gaming.',
      precio: '299,99 €',
      imagen: 'assets/images/producto3.jpg',
      reacondicionado : false
    },
    {
      nombre: 'Auriculares Inalámbricos',
      descripcion: 'Sonido envolvente y batería de larga duración.',
      precio: '129,99 €',
      imagen: 'assets/images/producto4.jpg',
      reacondicionado : false
    },
    {
      nombre: 'Placa Base Gaming',
      descripcion: 'Compatibilidad total y alto rendimiento.',
      precio: '189,99 €',
      imagen: 'assets/images/producto5.jpg',
      reacondicionado : false
    },
    {
      nombre: 'Tarjeta Gráfica RTX',
      descripcion: 'Potencia extrema para gaming y diseño.',
      precio: '699,99 €',
      imagen: 'assets/images/producto6.jpg',
      reacondicionado : false
    },
    {
      nombre: 'SSD NVMe 1TB',
      descripcion: 'Velocidad máxima de lectura y escritura.',
      precio: '119,99 €',
      imagen: 'assets/images/producto7.jpg',
      reacondicionado : false
    },
    {
      nombre: 'Fuente 750W Gold',
      descripcion: 'Eficiencia y estabilidad garantizadas.',
      precio: '109,99 €',
      imagen: 'assets/images/producto8.jpg',
      reacondicionado : false
    },
  ];

  productosReacondicionados = [
    {
      nombre: 'Teclado Mecánico RGB Premium Reacondicionado',
      descripcion: 'Switches mecánicos, iluminación RGB y diseño premium. Revisado profesionalmente y con garantía extendida.',
      precio: '79,99 €',
      imagen: 'assets/images/teclado-rgb-premium.png',
      reacondicionado : true
    },
    {
      nombre: 'Ratón Gaming Pro Premium Reacondicionado',
      descripcion: 'Alta precisión y ergonomía avanzada. Comprobado por técnicos y embalaje original incluido.',
      precio: '49,99 €',
      imagen: 'assets/images/raton-gaming-premium.png',
      reacondicionado : true
    },
    {
      nombre: 'Monitor 27" QHD Premium Reacondicionado',
      descripcion: 'Resolución QHD y 165Hz para gaming. Inspeccionado y probado, con garantía extendida de 12 meses.',
      precio: '249,99 €',
      imagen: 'assets/images/monitor-qhd-premium.png',
      reacondicionado : true
    },
    {
      nombre: 'Auriculares Inalámbricos Premium Reacondicionados',
      descripcion: 'Sonido envolvente y batería de larga duración. Revisados profesionalmente y embalaje original.',
      precio: '99,99 €',
      imagen: 'assets/images/auriculares-premium.png',
      reacondicionado : true
    },
    {
      nombre: 'Placa Base Gaming Premium Reacondicionada',
      descripcion: 'Compatibilidad total y alto rendimiento. Probada por expertos y garantía de 12 meses.',
      precio: '159,99 €',
      imagen: 'assets/images/placa-base-premium.png',
      reacondicionado : true
    },
    {
      nombre: 'Tarjeta Gráfica RTX Premium Reacondicionada',
      descripcion: 'Potencia extrema para gaming y diseño. Revisada profesionalmente y con garantía extendida.',
      precio: '599,99 €',
      imagen: 'assets/images/tarjeta-grafica-premium.png',
      reacondicionado : true
    },
    {
      nombre: 'SSD NVMe 1TB Premium Reacondicionado',
      descripcion: 'Velocidad máxima de lectura y escritura. Comprobado y embalaje original incluido.',
      precio: '99,99 €',
      imagen: 'assets/images/ssd-nvme-premium.png',
      reacondicionado : true
    },
    {
      nombre: 'Fuente 750W Gold Premium Reacondicionada',
      descripcion: 'Eficiencia y estabilidad garantizadas. Revisada profesionalmente y con garantía de 12 meses.',
      precio: '89,99 €',
      imagen: 'assets/images/fuente-750w-premium.png',
      reacondicionado : true
    },
  ];

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}
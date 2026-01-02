import { Component, Input } from '@angular/core';
import { Perifericos } from "../../shared/components/perifericos/perifericos";

@Component({
  selector: 'app-ratones',
  imports: [Perifericos],
  templateUrl: './ratones.html',
  styleUrl: './ratones.scss',
})
export class Ratones {
  ratones = [
    {
      nombre: 'Logitech G Pro X Superlight',
      descripcion: 'Ratón gaming ultraligero con sensor HERO 25K',
      marca: 'Logitech',
      precio: '129,99 €',
      imagen: 'assets/images/perifericos/raton-logitech-gpro.png',
      reacondicionado: false,
    },
    {
      nombre: 'Razer DeathAdder V3',
      descripcion: 'Ratón ergonómico profesional para esports',
      marca: 'Razer',
      precio: '89,99 €',
      imagen: 'assets/images/perifericos/raton-razer-deathadder.png',
      reacondicionado: false,
    },
    {
      nombre: 'Corsair M55 RGB Pro',
      descripcion: 'Ratón ligero ambidiestro con iluminación RGB',
      marca: 'Corsair',
      precio: '49,99 €',
      imagen: 'assets/images/perifericos/raton-corsair-m55.png',
      reacondicionado: true,
    },
    {
      nombre: 'SteelSeries Rival 3',
      descripcion: 'Ratón gaming preciso con sensor TrueMove',
      marca: 'SteelSeries',
      precio: '39,99 €',
      imagen: 'assets/images/perifericos/raton-steelseries-rival3.png',
      reacondicionado: false,
    }
  ];
  
}
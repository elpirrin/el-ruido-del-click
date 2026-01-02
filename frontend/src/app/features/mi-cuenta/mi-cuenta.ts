import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-cuenta',
  imports: [CommonModule],
  templateUrl: './mi-cuenta.html',
  styleUrl: './mi-cuenta.scss',
})
export class MiCuenta {
  activeTab = 'profile';

  // Datos de ejemplo del usuario
  user = {
    name: 'Juan Pérez',
    email: 'juan.perez@ejemplo.com',
    phone: '+34 600 123 456',
    avatar: 'https://ui-avatars.com/api/?name=Juan+Perez&background=1E88E5&color=fff&size=200'
  };

  // Pedidos de ejemplo
  orders = [
    {
      id: '#ORD-2024-001',
      date: '15 Dic 2024',
      status: 'Entregado',
      total: 159.99,
      items: 3
    },
    {
      id: '#ORD-2024-002',
      date: '20 Dic 2024',
      status: 'En camino',
      total: 89.50,
      items: 2
    },
    {
      id: '#ORD-2024-003',
      date: '28 Dic 2024',
      status: 'Procesando',
      total: 249.00,
      items: 5
    }
  ];

  // Direcciones de ejemplo
  addresses = [
    {
      id: 1,
      name: 'Casa',
      address: 'Calle Principal, 123',
      city: 'Madrid',
      postalCode: '28001',
      isDefault: true
    },
    {
      id: 2,
      name: 'Oficina',
      address: 'Av. de la Constitución, 45',
      city: 'Madrid',
      postalCode: '28020',
      isDefault: false
    }
  ];
}
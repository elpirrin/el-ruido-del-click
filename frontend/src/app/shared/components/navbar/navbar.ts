import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  menuActivo: string | null = null;
  // Estado de submenús: true = abierto, false = cerrado
  submenus: { [key: string]: boolean } = {};

  toggleMenu(menu: string): void {
    this.menuActivo = this.menuActivo === menu ? null : menu;
  }

  esActivo(menu: string): boolean {
    return this.menuActivo === menu;
  }

  toggleSubmenu(menu: string): void {
    if (this.submenus[menu]) {
      this.submenus = {};
    } else {
      this.submenus = { [menu]: true };
    }
  }

  estaActivo(menu: string): boolean {
    return !!this.submenus[menu];
  }
  
  cerrarSubmenuClick(): void {
    this.submenus = {};
    const toggle = document.getElementById('menu-toggle') as HTMLInputElement;
    if (toggle) toggle.checked = false;
  }

  @HostListener('document:click', ['$event'])
  cerrarTodo(event: MouseEvent) {//cuando se hace click fuera de la navbar cerrar menús y submenú
    const target = event.target as HTMLElement;
  
    // Si el click NO está dentro del nav → cerrar
    if (!target.closest('nav')) {
      this.submenus = {};
      const toggle = document.getElementById('menu-toggle') as HTMLInputElement;
      if (toggle) toggle.checked = false;
    }
  }

}
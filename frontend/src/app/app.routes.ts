import { Routes } from '@angular/router';
import { Layout } from './core/layout/layout';
import { Home } from './features/home/home';

export const routes: Routes = [
    {//“Para todas las rutas, usa Layout, y dentro carga las demás”
        path : '',
        component: Layout,
        children: [
            {
                path : '',
                component: Home
            },
            {
                path: 'legal',
                loadChildren: () => import('./features/legal/legal.routes').then(m => m.LEGAL_ROUTES),
            },
            {
                path: 'carrito',
                loadComponent: () => import('./features/cart/components/cart/cart').then(m => m.Cart),
            },
            {
                path: 'mi-cuenta',
                loadComponent: () => import('./features/mi-cuenta/mi-cuenta').then(m => m.MiCuenta),
            },
            {
                path: 'ratones',
                loadComponent: () => import('./features/ratones/ratones').then(m => m.Ratones),
            },
        ],
    },
    // Las rutas que no se encuentren, redirigen a la home.
      { path: '**', redirectTo: '', pathMatch: 'full' },
];
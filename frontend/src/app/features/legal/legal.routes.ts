import { Routes } from '@angular/router';
import { AvisoLegal } from './pages/aviso-legal/aviso-legal';
import { Privacidad } from './pages/privacidad/privacidad';
import { Cookies } from './pages/cookies/cookies';

export const LEGAL_ROUTES: Routes = [
  {
    path: 'aviso-legal',
    component: AvisoLegal
  },
  {
    path: 'politica-privacidad',
    component: Privacidad
  },
  {
    path: 'politica-cookies',
    component: Cookies
  },
];
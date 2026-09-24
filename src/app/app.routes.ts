import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'conversor',
    loadComponent: () =>
      import('./pages/conversor/conversor').then(m => m.ConversorComponent),
  },
  {
    path: '',
    redirectTo: 'conversor',
    pathMatch: 'full',
  },
];
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/', pathMatch: 'full'
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about').then(m => m.About)
    },
    {
        path: 'clothing',
        loadComponent: () => import('./pages/clothing/clothing').then(m => m.Clothing)
    },
    {
        path: 'football',
        loadComponent: () => import('./pages/football/football').then(m => m.Football)
    },
    {
        path: 'newsletter',
        loadComponent: () => import('./pages/newsletter/newsletter').then(m => m.Newsletter)
    },
    {
        path: '**',
        redirectTo: '/'
    }

];

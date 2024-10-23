import { Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { HoroscopoComponent } from './horoscopo/horoscopo.component';
import { DivisasComponent } from './divisas/divisas.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'forms',
        component: FormsComponent
    },
    {
        path: 'horoscopo',
        component: HoroscopoComponent
    },
    {
        path: 'divisas',
        component: DivisasComponent
    }
];

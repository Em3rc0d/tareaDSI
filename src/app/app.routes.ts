import { Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { HoroscopoComponent } from './horoscopo/horoscopo.component';
import { DivisasComponent } from './divisas/divisas.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'forms',
        pathMatch: 'full'
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

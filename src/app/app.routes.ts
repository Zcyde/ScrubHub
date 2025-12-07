import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Services } from './pages/services/services';

export const routes: Routes = [
    {
        path:'', component: Home, title: 'ScrubHub'
    },
    {
        path:'services', component: Services, title: 'Services'
    },
];

import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Services } from './pages/services/services';
import { Booking } from './pages/booking/booking';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'ScrubHub' },
  { path: 'booking', component: Booking, title: 'Booking' },
   { path: 'contact', component: Contact, title: 'Contact' },
  { path: 'services', component: Services, title: 'Services' },
];

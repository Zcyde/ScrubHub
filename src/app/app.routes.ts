import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Services } from './pages/services/services';
import { Contact } from './pages/contact/contact';
import { Employee } from './pages/employee/employee';
import { Appointment } from './pages/appointment/appointment';
import { Error } from './pages/error/error';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'ScrubHub' },
  { path: 'appointment', component: Appointment, title: 'Appointment' },
  { path: 'contact', component: Contact, title: 'Contact' },
  { path: 'services', component: Services, title: 'Services' },
  { path: 'employee', component: Employee, title: 'Employee' },
  { path: '**', component: Error, title: '404 Not Found' }
];

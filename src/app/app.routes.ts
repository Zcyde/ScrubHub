import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Services } from './pages/services/services';
import { Contact } from './pages/contact/contact';
import { Employee } from './pages/employee/employee';
import { Appointment } from './pages/appointment/appointment';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'ScrubHub' },
  { path:'appointment',component: Appointment,title:'appointment'},
  { path: 'contact', component: Contact, title: 'Contact' },
  { path: 'services', component: Services, title: 'Services' },
  { path: 'employee', component: Employee, title: 'Employee' }
];

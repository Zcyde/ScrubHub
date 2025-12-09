import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee.html',
  styleUrls: ['./employee.css']
})
export class Employee {

  employees = [
    {
      number: 'EMP001',
      name: 'Juan Dela Cruz',
      gender: 'Male',
      email: 'juan.delacruz@scrubhub.ph',
      status: 'Active',
      salary: '₱25,000'
    },
    {
      number: 'EMP002',
      name: 'Maria Santos',
      gender: 'Female',
      email: 'maria.santos@scrubhub.ph',
      status: 'Active',
      salary: '₱28,000'
    },
    {
      number: 'EMP003',
      name: 'Roberto Gomez',
      gender: 'Male',
      email: 'roberto.gomez@scrubhub.ph',
      status: 'Active',
      salary: '₱22,000'
    },
    {
      number: 'EMP004',
      name: 'Ana Reyes',
      gender: 'Female',
      email: 'ana.reyes@scrubhub.ph',
      status: 'On Leave',
      salary: '₱24,000'
    },
    {
      number: 'EMP005',
      name: 'Carlos Mendoza',
      gender: 'Male',
      email: 'carlos.mendoza@scrubhub.ph',
      status: 'Active',
      salary: '₱30,000'
    },
    {
      number: 'EMP006',
      name: 'Lisa Fernandez',
      gender: 'Female',
      email: 'lisa.fernandez@scrubhub.ph',
      status: 'Inactive',
      salary: '₱21,000'
    }
  ];

}
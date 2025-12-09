// employee-directory.component.ts
import { Component } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee-directory',
  templateUrl: './employee.html',
  styleUrls: ['./employee.css']
})
export class EmployeeDirectory{
  employees: Employee[] = [
    { employeeNumber: 'EMPO01', fullName: 'Juan Dela Cruz', gender: 'Male', email: 'juan.delacruz@scrubhub.ph', employmentStatus: 'Active', salary: 'P25,000' },
    { employeeNumber: 'EMPO02', fullName: 'Maria Santos', gender: 'Female', email: 'maria.santos@scrubhub.ph', employmentStatus: 'Active', salary: 'P28,000' },
    { employeeNumber: 'EMPO03', fullName: 'Roberto Gomez', gender: 'Male', email: 'roberto.gomez@scrubhub.ph', employmentStatus: 'Active', salary: 'P22,000' },
    { employeeNumber: 'EMPO04', fullName: 'Ana Reyes', gender: 'Female', email: 'ana.reyes@scrubhub.ph', employmentStatus: 'On Leave', salary: 'P24,000' },
    { employeeNumber: 'EMPO05', fullName: 'Carlos Mendoza', gender: 'Male', email: 'carlos.mendoza@scrubhub.ph', employmentStatus: 'Active', salary: 'P30,000' },
    { employeeNumber: 'EMPO06', fullName: 'Lisa Fernandez', gender: 'Female', email: 'lisa.fernandez@scrubhub.ph', employmentStatus: 'Inactive', salary: 'P21,000' }
  ];
}
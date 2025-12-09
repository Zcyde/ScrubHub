import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment.html',
  styleUrls: ['./appointment.css']
})
export class Appointment {

  appointments = [
    { name: "John Doe", service: "Basic Wash", date: "2025-12-10" },
    { name: "Emma Cruz", service: "Interior Service", date: "2025-12-12" },
    { name: "Mike Santos", service: "Full Detailing", date: "2025-12-15" },
    { name: "Sarah Lee", service: "Premium Wash", date: "2025-12-18" },
    { name: "Luis Dela Cruz", service: "Engine Detailing", date: "2025-12-20" },
    { name: "Jacob Tan", service: "Ceramic Coating", date: "2025-12-22" }
  ];
}

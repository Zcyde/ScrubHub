import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class Services {

  services = [
    {
      title: 'Basic Wash',
      price: 250,
      details: ['Tire cleaning', 'Quick dry']
    },
    {
      title: 'Premium Wash',
      price: 400,
      details: ['Basic Exterior Wash', 'Premium Foam Wash', 'Wax & Shine']
    },
    {
      title: 'Interior Service',
      price: 500,
      details: ['Basic Vacuum & Wipe', 'Deep Interior Cleaning', 'Leather Conditioning']
    },
    {
      title: 'Engine Detailing',
      price: 800,
      details: ['Engine Degreasing', 'Steam Clean', 'Protective Coating']
    },
    {
      title: 'Ceramic Coating',
      price: 2000,
      details: ['Surface Prep', 'Premium Ceramic Layer', 'Water Repellent Protection']
    },
    {
      title: 'Full Detailing',
      price: 1500,
      details: ['Interior Deep Clean', 'Exterior Treatment', 'Polish + Wax']
    }
  ];

}

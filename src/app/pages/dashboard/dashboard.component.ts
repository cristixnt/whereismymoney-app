import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  userName = 'Usuario';

  summaryCards = [
    { title: 'Balance Total', value: '$12,450.00', icon: 'account_balance', color: '#022b3a' },
    { title: 'Ingresos del Mes', value: '$5,200.00', icon: 'trending_up', color: '#1F7A8C' },
    { title: 'Gastos del Mes', value: '$3,150.00', icon: 'trending_down', color: '#BFDBF7' },
    { title: 'Ahorro', value: '$2,050.00', icon: 'savings', color: '#022b3a' }
  ];
}

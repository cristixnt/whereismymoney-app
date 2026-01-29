import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { HotToastService } from '@ngxpert/hot-toast';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule
  ],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  // Preferencias generales
  settings = {
    darkMode: false,
    notifications: true,
    emailNotifications: true,
    pushNotifications: false,
    language: 'es',
    currency: 'USD',
    dateFormat: 'dd/MM/yyyy',
    timezone: 'America/New_York'
  };

  languages = [
    { value: 'es', label: 'Español' },
    { value: 'en', label: 'English' },
    { value: 'pt', label: 'Português' }
  ];

  currencies = [
    { value: 'USD', label: 'USD - Dólar estadounidense' },
    { value: 'EUR', label: 'EUR - Euro' },
    { value: 'MXN', label: 'MXN - Peso mexicano' },
    { value: 'COP', label: 'COP - Peso colombiano' },
    { value: 'ARS', label: 'ARS - Peso argentino' }
  ];

  dateFormats = [
    { value: 'dd/MM/yyyy', label: 'DD/MM/YYYY' },
    { value: 'MM/dd/yyyy', label: 'MM/DD/YYYY' },
    { value: 'yyyy-MM-dd', label: 'YYYY-MM-DD' }
  ];

  timezones = [
    { value: 'America/New_York', label: 'Eastern Time (ET)' },
    { value: 'America/Chicago', label: 'Central Time (CT)' },
    { value: 'America/Denver', label: 'Mountain Time (MT)' },
    { value: 'America/Los_Angeles', label: 'Pacific Time (PT)' },
    { value: 'America/Mexico_City', label: 'Ciudad de México' },
    { value: 'America/Bogota', label: 'Bogotá' },
    { value: 'America/Buenos_Aires', label: 'Buenos Aires' },
    { value: 'Europe/Madrid', label: 'Madrid' }
  ];

  constructor(private toast: HotToastService) {}

  saveSettings(): void {
    console.log('Settings saved:', this.settings);
    this.toast.success('Configuración guardada exitosamente', {
      icon: '👍',
    });
  }

  resetSettings(): void {
    this.settings = {
      darkMode: false,
      notifications: true,
      emailNotifications: true,
      pushNotifications: false,
      language: 'es',
      currency: 'USD',
      dateFormat: 'dd/MM/yyyy',
      timezone: 'America/New_York'
    };
    this.toast.info('Configuración restablecida', {
      icon: '🔄',
    });
  }
}

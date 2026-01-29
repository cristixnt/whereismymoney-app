import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HotToastService } from '@ngxpert/hot-toast';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  profileForm: FormGroup;
  passwordForm: FormGroup;
  hideCurrentPassword = true;
  hideNewPassword = true;
  hideConfirmPassword = true;

  constructor(
    private fb: FormBuilder,
    private toast: HotToastService
  ) {
    this.profileForm = this.fb.group({
      nombre: ['Usuario Demo', [Validators.required, Validators.minLength(2)]],
      apellido: ['Apellido Demo', [Validators.required, Validators.minLength(2)]],
      email: ['usuario@demo.com', [Validators.required, Validators.email]],
      telefono: ['+1 234 567 8900', [Validators.pattern(/^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/)]],
      direccion: ['Calle Principal 123, Ciudad']
    });

    this.passwordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    const newPassword = form.get('newPassword');
    const confirmPassword = form.get('confirmPassword');
    
    if (newPassword && confirmPassword && newPassword.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
    }
    return null;
  }

  onSaveProfile(): void {
    if (this.profileForm.valid) {
      console.log('Profile saved:', this.profileForm.value);
      this.toast.success('Perfil actualizado exitosamente', {
        icon: '👤',
      });
    }
  }

  onChangePassword(): void {
    if (this.passwordForm.valid) {
      console.log('Password changed');
      this.passwordForm.reset();
      this.toast.success('Contraseña actualizada exitosamente', {
        icon: '🔐',
      });
    }
  }
}

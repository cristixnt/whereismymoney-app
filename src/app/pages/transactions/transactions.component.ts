import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { HotToastService } from '@ngxpert/hot-toast';

interface Transaction {
  id: number;
  cantidad: number;
  tipo: 'ingreso' | 'gasto';
  fecha: Date;
  descripcion: string;
  usuarioRegistro: string;
  cuenta: string;
}

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatChipsModule
  ],
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {
  transactionForm: FormGroup;
  displayedColumns: string[] = ['fecha', 'tipo', 'descripcion', 'cuenta', 'cantidad', 'acciones'];
  
  transactions: Transaction[] = [
    { id: 1, cantidad: 2500, tipo: 'ingreso', fecha: new Date(), descripcion: 'Salario mensual', usuarioRegistro: 'Usuario', cuenta: 'Banco Principal' },
    { id: 2, cantidad: 150, tipo: 'gasto', fecha: new Date(), descripcion: 'Supermercado', usuarioRegistro: 'Usuario', cuenta: 'Efectivo' },
    { id: 3, cantidad: 80, tipo: 'gasto', fecha: new Date(), descripcion: 'Servicios', usuarioRegistro: 'Usuario', cuenta: 'Banco Principal' }
  ];

  tipos = [
    { value: 'ingreso', label: 'Ingreso' },
    { value: 'gasto', label: 'Gasto' }
  ];

  cuentas = [
    { value: 'banco-principal', label: 'Banco Principal' },
    { value: 'banco-secundario', label: 'Banco Secundario' },
    { value: 'efectivo', label: 'Efectivo' },
    { value: 'tarjeta-credito', label: 'Tarjeta de Crédito' }
  ];

  constructor(
    private fb: FormBuilder,
    private toast: HotToastService
  ) {
    this.transactionForm = this.fb.group({
      cantidad: ['', [Validators.required, Validators.min(0.01)]],
      tipo: ['', Validators.required],
      fecha: [new Date(), Validators.required],
      descripcion: ['', [Validators.required, Validators.maxLength(200)]],
      cuenta: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.transactionForm.valid) {
      const formValue = this.transactionForm.value;
      const newTransaction: Transaction = {
        id: this.transactions.length + 1,
        cantidad: formValue.cantidad,
        tipo: formValue.tipo,
        fecha: formValue.fecha,
        descripcion: formValue.descripcion,
        usuarioRegistro: 'Usuario Actual',
        cuenta: this.cuentas.find(c => c.value === formValue.cuenta)?.label || formValue.cuenta
      };
      
      this.transactions = [newTransaction, ...this.transactions];
      this.transactionForm.reset({ fecha: new Date() });
      
      this.toast.success('Transacción registrada exitosamente', {
        icon: '✅',
      });
    }
  }

  deleteTransaction(id: number): void {
    this.transactions = this.transactions.filter(t => t.id !== id);
    this.toast.success('Transacción eliminada', {
      icon: '🗑️',
    });
  }

  getTotalIngresos(): number {
    return this.transactions
      .filter(t => t.tipo === 'ingreso')
      .reduce((sum, t) => sum + t.cantidad, 0);
  }

  getTotalGastos(): number {
    return this.transactions
      .filter(t => t.tipo === 'gasto')
      .reduce((sum, t) => sum + t.cantidad, 0);
  }

  getBalance(): number {
    return this.getTotalIngresos() - this.getTotalGastos();
  }
}

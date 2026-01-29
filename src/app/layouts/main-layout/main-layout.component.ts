import { Component, HostListener, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule
  ],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  isSidenavOpen = true;
  isMobile = false;
  userName = 'Usuario';
  private isBrowser: boolean;

  // Todos los items del menú
  menuItems = [
    { icon: 'dashboard', label: 'Dashboard', route: '/app/dashboard' },
    { icon: 'account_balance_wallet', label: 'Finanzas', route: '/app/finances' },
    { icon: 'swap_horiz', label: 'Transacciones', route: '/app/transactions' },
    { icon: 'person', label: 'Perfil', route: '/app/profile' },
    { icon: 'settings', label: 'Ajustes', route: '/app/settings' }
  ];

  // Items principales para la navegación inferior (móvil)
  mainNavItems = [
    { icon: 'dashboard', label: 'Inicio', route: '/app/dashboard' },
    { icon: 'account_balance_wallet', label: 'Finanzas', route: '/app/finances' },
    { icon: 'swap_horiz', label: 'Movimientos', route: '/app/transactions' }
  ];

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    if (this.isBrowser) {
      this.isMobile = window.innerWidth <= 900;
      if (!this.isMobile) {
        this.isSidenavOpen = true;
      }
    }
  }

  toggleSidenav(): void {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  onSidenavChange(opened: boolean): void {
    this.isSidenavOpen = opened;
  }

  logout(): void {
    this.router.navigate(['/login']);
  }
}

import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  id?: string;
  email: string;
  name?: string;
  token?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser$: Observable<User | null>;
  
  private readonly STORAGE_KEY = 'whereismymoney_user';
  private readonly TOKEN_KEY = 'whereismymoney_token';
  private isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    
    // Intentar cargar usuario del localStorage solo si estamos en el navegador
    const storedUser = this.getUserFromStorage();
    this.currentUserSubject = new BehaviorSubject<User | null>(storedUser);
    this.currentUser$ = this.currentUserSubject.asObservable();
  }

  /**
   * Obtener usuario actual
   */
  public get currentUser(): User | null {
    return this.currentUserSubject.value;
  }

  /**
   * Verificar si el usuario está autenticado
   */
  public isAuthenticated(): boolean {
    return !!this.currentUser && !!this.getToken();
  }

  /**
   * Login - Guardar usuario y token en localStorage
   */
  public login(email: string, password: string): Observable<User> {
    return new Observable(observer => {
      // Simular llamada a API
      setTimeout(() => {
        const user: User = {
          id: 'user_' + Math.random().toString(36).substr(2, 9),
          email: email,
          name: email.split('@')[0],
          token: 'token_' + Math.random().toString(36).substr(2, 20)
        };

        // Guardar en localStorage
        this.saveUserToStorage(user);
        this.saveTokenToStorage(user.token || '');

        // Actualizar BehaviorSubject
        this.currentUserSubject.next(user);

        observer.next(user);
        observer.complete();
      }, 500);
    });
  }

  /**
   * Register - Crear nuevo usuario
   */
  public register(email: string, name: string, password: string): Observable<User> {
    return new Observable(observer => {
      // Simular llamada a API
      setTimeout(() => {
        const user: User = {
          id: 'user_' + Math.random().toString(36).substr(2, 9),
          email: email,
          name: name,
          token: 'token_' + Math.random().toString(36).substr(2, 20)
        };

        // Guardar en localStorage
        this.saveUserToStorage(user);
        this.saveTokenToStorage(user.token || '');

        // Actualizar BehaviorSubject
        this.currentUserSubject.next(user);

        observer.next(user);
        observer.complete();
      }, 500);
    });
  }

  /**
   * Logout - Eliminar usuario y token
   */
  public logout(): void {
    if (this.isBrowser) {
      localStorage.removeItem(this.STORAGE_KEY);
      localStorage.removeItem(this.TOKEN_KEY);
    }
    this.currentUserSubject.next(null);
  }

  /**
   * Obtener token del storage
   */
  public getToken(): string | null {
    if (!this.isBrowser) return null;
    return localStorage.getItem(this.TOKEN_KEY);
  }

  /**
   * Guardar usuario en localStorage
   */
  private saveUserToStorage(user: User): void {
    if (!this.isBrowser) return;
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
  }

  /**
   * Guardar token en localStorage
   */
  private saveTokenToStorage(token: string): void {
    if (!this.isBrowser) return;
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  /**
   * Obtener usuario del localStorage
   */
  private getUserFromStorage(): User | null {
    if (!this.isBrowser) return null;
    try {
      const storedUser = localStorage.getItem(this.STORAGE_KEY);
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error('Error parsing user from storage:', error);
      return null;
    }
  }
}

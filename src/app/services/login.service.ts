import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private usuariosPermitidos = [
    { usuario: 'marlenejb', password: 'Marlene70' },
  ];

  constructor() {}

  login(usuario: string, password: string): Observable<any> {
    const usuarioEncontrado = this.usuariosPermitidos.find(
      (u) => u.usuario === usuario && u.password === password
    );

    if (usuarioEncontrado) {
      const token = btoa(`${usuario}:${password}`);
      localStorage.setItem('token', token);
      localStorage.setItem('usuario', usuario);
      console.log('Inicio de sesión exitoso:', usuario);
      return of({ success: true, token });
    } else {
      console.error('Credenciales inválidas');
      return of({ success: false, message: 'Credenciales inválidas' });
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    console.log('Sesión cerrada');
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('token') !== null;
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { admin } from '../models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class MockAdministradorService {
  private admins: admin[] = [
    {
      nombre: 'Marlene',
      apellidoPaterno: 'Juárez',
      apellidoMaterno: 'Brenis',
      correo: 'melissamarlenejuarez@gmail.com',
      fechaRegistro: new Date('2023-01-01')
    }
  ];

  constructor() {}

  getAdmin(): Observable<admin[]> {
    console.log('Simulando llamada a getAdmin');
    return of(this.admins);
  }
}

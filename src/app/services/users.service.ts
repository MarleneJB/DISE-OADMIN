import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class MockUsersService {
  private mockUsers: User[] = [
    {
      id: 1,
      estado: 'Activo',
      edad: 30,
      sexo: 'Masculino',
      usuario: 'jPerez',
      correo: 'juan.perez@example.com',
      fechaRegistro: new Date('2023-01-01'),
      ubicacion: 'Ciudad de México'
    },
    {
      id: 2,
      estado: 'Inactivo',
      edad: 25,
      sexo: 'Femenino',
      usuario: 'aGomez',
      correo: 'ana.gomez@example.com',
      fechaRegistro: new Date('2023-05-15'),
      ubicacion: 'Monterrey'
    },
    {
      id: 3,
      estado: 'Activo',
      edad: 35,
      sexo: 'Masculino',
      usuario: 'lRodriguez',
      correo: 'luis.rodriguez@example.com',
      fechaRegistro: new Date('2022-10-10'),
      ubicacion: 'Guadalajara'
    },
    {
      id: 4,
      estado: 'Activo',
      edad: 21,
      sexo: 'Femenino',
      usuario: 'danielaer',
      correo: 'danielaespinosa@example.com',
      fechaRegistro: new Date('2022-10-10'),
      ubicacion: 'Veracruz'
    }
  ];

  constructor() {}

  getUsers(): Observable<User[]> {
    return of(this.mockUsers);
  }
}

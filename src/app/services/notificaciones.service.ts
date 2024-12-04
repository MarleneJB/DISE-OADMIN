import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { reporte } from '../models/notificaciones.model';

@Injectable({
  providedIn: 'root'
})
export class MockNotificacionesService {

  constructor() { }

  getReportes(): Observable<reporte[]> {
    const mockReportes: reporte[] = [
      {
        id: 1,
        motivo: 'Comentario inapropiado',
        comentario: 'Este usuario hizo un comentario inapropiado.',
        fechaRegistro: new Date('2024-12-03T10:30:00'),
        usuario_reportado: 3
      },
      {
        id: 2,
        motivo: 'Spam',
        comentario: 'Este usuario está enviando spam en los comentarios.',
        fechaRegistro: new Date('2024-12-03T11:00:00'),
        usuario_reportado: 4
      }
    ];

    return of(mockReportes);
  }
}

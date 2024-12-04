import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface ApiData {
  ubicaciones: { [estado: string]: number };
  total_usuarios: number;
  estado_con_mas_usuarios: string;
  usuarios_activos: number;
  total_reportes: number;
  estado_con_mas_reportes?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  constructor() {}

  getEstadisticas(): Observable<ApiData> {
    const mockData: ApiData = {
      ubicaciones: {
        'CIUDAD_DE_MEXICO': 120,
        'VERACRUZ': 85,
        'PUEBLA': 45,
      },
      total_usuarios: 250,
      estado_con_mas_usuarios: 'CDMX',
      usuarios_activos: 180,
      total_reportes: 100,
      estado_con_mas_reportes: 'Jalisco',
    };

    return of(mockData);
  }
}

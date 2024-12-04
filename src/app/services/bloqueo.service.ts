import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BloqueoService {
  private apiUrl = 'https://better-ursola-jazael-26647204.koyeb.app/api/v1/bloquearUsuario';
  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE5NjcwMDQxLCJpYXQiOjE3MTcwNzgwNDEsImp0aSI6IjQ5YWZjNjc3NjhhNDRhZWY4OTIyMTZhOGQ2NGFhYjkzIiwidXNlcl9pZCI6MX0.ArBVzGnU16ApHQdMikrlsGl3Kl1LR6tKjPjWWy21Vgk';

  
  constructor(private http: HttpClient) { }

  setBloqueo(usuario_id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token,
      'Content-Type': 'application/json'
    });

    const url = `${this.apiUrl}/${usuario_id}/`;

    return this.http.post(url,{}, { headers }).pipe(
      map((res: any) => {
        localStorage.setItem('usuario_id', usuario_id.toString());
        console.log('usuario bloqueado');
        return res;
      }),
      catchError((error) => {
          console.error('Error en el bloqueo:', error);
          return throwError(error);
      })
    );
  }
}

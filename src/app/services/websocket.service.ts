import { Injectable, NgZone } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket!: WebSocket;
  private mensajeSubject: Subject<any> = new Subject<any>();

  constructor(private ngZone: NgZone) { }

  connect() {
    this.socket = new WebSocket(`ws://better-ursola-jazael-26647204.koyeb.app/ws/admin/reports/`);

    this.socket.onmessage = (event) => {
      this.ngZone.run(() => {
        const data = JSON.parse(event.data);
        this.mensajeSubject.next(data);
      });
    };

    this.socket.onclose = (event) => {
      console.error('Notification socket closed unexpectedly');
    };
  }

  get messages() {
    return this.mensajeSubject.asObservable();
  }

  disconnect() {
    if (this.socket) {
      this.socket.close();
    }
  }
}

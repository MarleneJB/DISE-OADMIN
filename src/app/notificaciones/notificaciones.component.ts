import { Component, OnInit } from '@angular/core';
import { reporte } from '../models/notificaciones.model';
import { BloqueoService } from '../services/bloqueo.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmacionBloqueoComponent } from '../confirmacion-bloqueo/confirmacion-bloqueo.component';
import { WebsocketService } from '../services/websocket.service';
import { Subscription } from 'rxjs';
import { MockNotificacionesService } from '../services/notificaciones.service';

@Component({
  selector: 'app-notificacioes',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacioesComponent implements OnInit {
  notificaciones: any[] = [];
  reportes: reporte[] = [];
  fechaFormateada!: string;
  private websocketSubscription!: Subscription;

  constructor(
    private websocketService: WebsocketService,
    private notificacionesService: MockNotificacionesService,
    private bloqueoService: BloqueoService,
    public ventana: MatDialog,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.websocketService.connect();
    this.websocketSubscription = this.websocketService.messages.subscribe(
      message => {
        console.log('Notification received: ', message);
        this.reportes.push(message);
      }
    );
    this.obtenerReportes();
  }

  obtenerReportes(): void {
    this.notificacionesService.getReportes().subscribe(
      data => {
        this.reportes = data;
      },
      error => {
        console.error('Error al obtener los reportes:', error);
      }
    );
  }

  bloquearUsuario(): void {
    const dialogRef = this.dialog.open(ConfirmacionBloqueoComponent);

    dialogRef.afterClosed().subscribe(usuario_id => {
        if (usuario_id) {
            this.bloqueoService.setBloqueo(usuario_id).subscribe(
              response => {
                console.log('Usuario bloqueado:', response);
              },
              error => {
                console.error('Error al bloquear el usuario:', error);
              }
            );
        }
    });
  }
}

import { Component, OnDestroy } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { WebsocketService } from '../services/websocket.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnDestroy{
  private websocketSubscription!: Subscription;

  constructor(
    private loginService: LoginService, 
    private router: Router,
    private websocketService: WebsocketService,
    ) { }

  logout():void{
    this.loginService.logout();
    this.router.navigate(['/']);
    console.log('Sesión cerrada');
  }

  ngOnDestroy() {
    if (this.websocketSubscription) {
      this.websocketSubscription.unsubscribe();
    }
    this.websocketService.disconnect();
    console.log('WebSocket desconectado');
  }

}

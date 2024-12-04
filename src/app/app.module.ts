import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { NotificacioesComponent } from './notificaciones/notificaciones.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HttpClientModule }  from "@angular/common/http";
import { MapComponent } from './map/map.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmacionBloqueoComponent } from './confirmacion-bloqueo/confirmacion-bloqueo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    NavComponent,
    NotificacioesComponent,
    UsuariosComponent,
    PerfilComponent,
    MapComponent,
    ConfirmacionBloqueoComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

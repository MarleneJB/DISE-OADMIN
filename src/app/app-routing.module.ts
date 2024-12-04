
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NotificacioesComponent } from './notificaciones/notificaciones.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  { path : '', component: LoginComponent },
  { path : 'panel', component: MainComponent },
  { path : 'nav', component: NavComponent },
  { path : 'notificaciones', component: NotificacioesComponent },
  { path : 'perfil', component:  PerfilComponent },
  { path : 'usuarios', component:UsuariosComponent }
];

export const appRoutingProviders: any[]=[];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { admin } from '../models/admin.model';
import { MockAdministradorService } from '../services/administrador.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  usuario: string | null = '';
  password!: string | null;
  passwordOculta!: string;
  admin: admin[] = [];

  constructor(
    private adminService: MockAdministradorService
  ) {}

  ngOnInit(): void {
    this.usuario = 'MarleneJB'

    this.adminService.getAdmin().subscribe(
      (res) => {
        this.admin = res;
        console.log('Usuarios obtenidos (simulados):', res);
      },
      (error) => {
        console.log('Error al obtener los usuarios:', error);
      }
    );
  }

  ocultarContraseña(contraseña: string | null): string {
    if (contraseña === null) {
      return '';
    }
    return '*'.repeat(contraseña.length);
  }
}

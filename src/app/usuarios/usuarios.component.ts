import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { MockUsersService } from '../services/users.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: MockUsersService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (users) => {
        console.log('Usuarios obtenidos (mock):', users);
        this.users = users;
      },
      (error) => {
        console.error('Error al obtener los usuarios:', error);
      }
    );
  }
}

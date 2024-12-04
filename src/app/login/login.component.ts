import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { LoginFormService } from '../services/login-form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginFormService ]
})

export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private loginService: LoginService, 
    private formService: LoginFormService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formService.formulario();
  }
  

  onSubmit(): void {
    console.log(this.loginForm.value);
    this.loginService.login( this.loginForm.value.usuario, this.loginForm.value.password
    ).subscribe(
      (response) => {
        console.log('Login successful:', response);
        this.router.navigate(['/panel']);
      },
      (error) => {
        console.error('Login error:', error);
        alert("Datos incorrectos");
      }
    );
  }
}

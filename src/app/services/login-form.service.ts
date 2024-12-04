import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class LoginFormService {

  constructor(private formBuilder: FormBuilder) { }

  formulario(): FormGroup{
    return this.formBuilder.group({
      usuario: [
        '', 
        [Validators.required, 
          Validators.email]
        ],
      password: [
        '', 
        [Validators.required, 
          Validators.minLength(6)]
        ]
      });
      
  }
}

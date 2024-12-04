import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BloqueoService } from '../services/bloqueo.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-confirmacion-bloqueo',
  templateUrl: './confirmacion-bloqueo.component.html',
  styleUrls: ['./confirmacion-bloqueo.component.css']
})
export class ConfirmacionBloqueoComponent {
  usuario_id!: number;
  bloquear!: FormGroup;

  constructor(
    private bloqueo: BloqueoService,
    public dialogRef: MatDialogRef<ConfirmacionBloqueoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {usuario_id: number}
  ) {}

  /* setBloqueo(){
    this.usuario_id = this.data.usuario_id;
    this.bloqueo.setBloqueo(this.bloquear.value.usuario_id);
  } */

  onNoClick(): void{
    this.dialogRef.close(false);
  }

  onConfirm(): void{
    this.dialogRef.close(this.usuario_id);
  }
  
}

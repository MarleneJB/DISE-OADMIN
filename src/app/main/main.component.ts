import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../map/data-map.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  totalUsuarios = 0;
  estadoConMasUsuarios = '';
  usuariosActivos = 0;
  totalReportes = 0;
  estadoConMasReportes = '';

  constructor(private dataService: MockDataService) {}

  ngOnInit(): void {
    this.dataService.getEstadisticas().subscribe(data => {
      this.totalUsuarios = data.total_usuarios;
      this.estadoConMasUsuarios = this.toTitleCase(data.estado_con_mas_usuarios.split('_').join(' '));
      this.usuariosActivos = data.usuarios_activos;
      this.totalReportes = data.total_reportes;
      this.estadoConMasReportes = data.estado_con_mas_reportes || 'N/A';
    });
  }

  toTitleCase(str: string): string {
    return str.toLowerCase().split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
}

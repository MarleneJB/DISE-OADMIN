import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map, Marker, Popup } from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { MockDataService } from './data-map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  @ViewChild('map') divMap?: ElementRef;
  mapboxToken = environment.mapbox_key;

  constructor(private dataService: MockDataService) {}

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'El elemento HTML no fue encontrado';

    const map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-102.1332, 23.4326],
      zoom: 4,
      accessToken: this.mapboxToken
    });

    this.dataService.getEstadisticas().subscribe(data => {
      Object.entries(data.ubicaciones).forEach(([estado, usuarios]) => {
        if (usuarios > 0) {
          const popup = new Popup({ offset: 25 }).setText(`Estado: ${estado}\nUsuarios activos: ${usuarios}`);
          new Marker()
            .setLngLat(this.getStateCoordinates(estado))
            .setPopup(popup)
            .addTo(map);
        }
      });
    });
  }

  getStateCoordinates(state: string): [number, number] {
    const normalizedState = state.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase().replace(/ /g, '_');
    switch (normalizedState) {
      case 'AGUASCALIENTES': return [-102.2916, 21.8853];
      case 'BAJA_CALIFORNIA': return [-115.4906, 30.9756];
      case 'BAJA_CALIFORNIA_SUR': return [-111.8315, 26.0444];
      case 'CAMPECHE': return [-90.3782, 19.8301];
      case 'CHIAPAS': return [-93.1039, 16.7571];
      case 'CHIHUAHUA': return [-106.0691, 28.6329];
      case 'CIUDAD_DE_MEXICO': return [-99.1332, 19.4326];
      case 'COAHUILA': return [-101.7068, 27.0587];
      case 'COLIMA': return [-103.7226, 19.1223];
      case 'DURANGO': return [-104.521, 24.0277];
      case 'ESTADO_DE_MEXICO': return [-99.7612, 19.4326];
      case 'GUANAJUATO': return [-101.2574, 21.019];
      case 'GUERRERO': return [-99.4768, 17.4265];
      case 'HIDALGO': return [-98.6611, 20.0911];
      case 'JALISCO': return [-103.346, 20.6597];
      case 'MICHOACAN': return [-101.7068, 19.5665];
      case 'MORELOS': return [-99.3087, 18.6813];
      case 'NAYARIT': return [-105.3119, 21.7514];
      case 'NUEVO_LEON': return [-100.3157, 25.5922];
      case 'OAXACA': return [-96.7266, 17.0732];
      case 'PUEBLA': return [-97.7341, 19.0414];
      case 'QUERETARO': return [-99.1332, 20.5888];
      case 'QUINTANA_ROO': return [-88.3068, 19.1817];
      case 'SAN_LUIS_POTOSI': return [-100.9794, 22.1565];
      case 'SINALOA': return [-107.2539, 25.1721];
      case 'SONORA': return [-110.9115, 29.2972];
      case 'TABASCO': return [-92.9376, 17.8409];
      case 'TAMAULIPAS': return [-99.1456, 24.2669];
      case 'TLAXCALA': return [-98.2302, 19.3122];
      case 'VERACRUZ': return [-96.1332, 19.1738];
      case 'YUCATAN': return [-89.1455, 20.7099];
      case 'ZACATECAS': return [-102.5528, 22.7709];
      default: return [0, 0];
    }
  }
}

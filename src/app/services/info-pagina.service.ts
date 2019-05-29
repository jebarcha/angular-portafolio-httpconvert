import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPagina } from '../Interfaces/info-pagina.interface';

@Injectable({
	providedIn: 'root'
})
export class InfoPaginaService {
	info: infoPagina = {};
	cargada = false;

	equipo: any[] = [];

	constructor(private http: HttpClient) {
		// console.log('Servicio de infoPagina listo');
		this.cargarInfo();
		this.cargarEquipo();
	}

	private cargarInfo() {
		// Leer el archivo JSON
		this.http.get('assets/data/data-pagina.json').subscribe((resp: infoPagina) => {
			this.cargada = true;
			this.info = resp;
			// console.log(resp.twitter);
			// console.log(this.cargada);
			// console.log(this.info);
		});
	}

	private cargarEquipo() {
		// console.log('cargarEquipo');
		this.http.get('https://angular-html-43e35.firebaseio.com/equipo.json').subscribe((resp: any[]) => {
			this.equipo = resp;
			// console.log(this.equipo);
		});
	}
}

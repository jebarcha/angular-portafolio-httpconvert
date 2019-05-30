import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../Interfaces/producto-descripcion.interface';

@Component({
	selector: 'app-item',
	templateUrl: './item.component.html',
	styleUrls: [ './item.component.css' ]
})
export class ItemComponent implements OnInit {
	producto: ProductoDescripcion;
	id: string;

	constructor(private route: ActivatedRoute, public productosService: ProductosService) {}

	ngOnInit() {
		this.route.params.subscribe((parametros) => {
			// console.log(parametros['id']);
			this.id = parametros['id'];
			this.productosService.getProducto(this.id).subscribe((producto: ProductoDescripcion) => {
				// console.log(producto);
				// console.log(this.id);
				this.producto = producto;
			});
		});
	}
}

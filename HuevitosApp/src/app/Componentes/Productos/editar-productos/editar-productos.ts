import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../../Entidades/Producto';
import { ServiceWs } from '../../../Service/service-ws';

@Component({
  selector: 'app-editar-productos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-productos.html'
})
export class EditarProductos implements OnInit {

  id!: number;
  producto: Producto = new Producto();

  constructor(
    private route: ActivatedRoute,
    private service: ServiceWs,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.service.buscarProducto(this.id).subscribe({
      next: (data) => {
        this.producto = data;
      },
      error: (e) => {
        console.error(e);
        alert('No se pudo cargar el producto');
        this.router.navigate(['/listarProducto']);
      }
    });
  }

  actualizar(): void {
    // asegurar números
    this.producto.precio = Number(this.producto.precio);
    this.producto.stock = Number(this.producto.stock);
    this.producto.tiendaId = Number(this.producto.tiendaId);

    // MUY IMPORTANTE: tu backend busca por producto.getIdProducto()
    // así que debe venir lleno:
    this.producto.idProducto = this.id;

    this.service.editarProducto(this.producto).subscribe({
      next: (resp) => {
        alert(resp); // "Editado con exito"
        this.router.navigate(['/listarProducto']);
      },
      error: (e) => {
        console.error(e);
        if (e.status === 409) alert(e.error);
        else alert('Error al actualizar');
      }
    });
  }

  cancelar(): void {
    this.router.navigate(['/listarProducto']);
  }
}

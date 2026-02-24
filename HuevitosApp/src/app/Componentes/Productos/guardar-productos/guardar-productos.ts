import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from '../../../Entidades/Producto';
import { ServiceWs } from '../../../Service/service-ws';

@Component({
  selector: 'app-guardar-productos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './guardar-productos.html'
})
export class GuardarProductos {

  producto: Producto = new Producto();

  constructor(private service: ServiceWs, private router: Router) {}

  guardar() {
    // para que lo genere el backend
    (this.producto as any).idProducto = null;

    // asegurar números
    this.producto.precio = Number(this.producto.precio);
    this.producto.stock = Number(this.producto.stock);
    this.producto.tiendaId = Number(this.producto.tiendaId);

    this.service.guardarProducto(this.producto).subscribe({
      next: (resp) => {
        alert(resp); // "Producto registrado con exito"
        this.router.navigate(['/listarProducto']);
      },
      error: (e) => {
        console.error(e);
        if (e.status === 409) alert(e.error); // duplicado o no existe
        else alert("Error al guardar");
      }
    });
  }

  cancelar() {
    this.router.navigate(['/listarProducto']);
  }
}

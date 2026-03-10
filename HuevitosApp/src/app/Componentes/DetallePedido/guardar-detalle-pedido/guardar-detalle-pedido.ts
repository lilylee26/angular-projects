import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DetallePedido } from '../../../Entidades/DetallePedido';
import { ServiceWs } from '../../../Service/service-ws';

@Component({
  selector: 'app-guardar-detalle-pedido',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './guardar-detalle-pedido.html'
})
export class GuardarDetallePedido {

  detalle: DetallePedido = new DetallePedido();

  constructor(private service: ServiceWs, private router: Router) { }

  guardar() {
    (this.detalle as any).idDetalle = null;

    // asegurar números
    this.detalle.idPedido = Number(this.detalle.idPedido);
    this.detalle.idProducto = Number(this.detalle.idProducto);
    this.detalle.cantidad = Number(this.detalle.cantidad);
    this.detalle.precioUnitario = Number(this.detalle.precioUnitario);
    this.detalle.tiendaId = Number(this.detalle.tiendaId);

    this.service.guardarDetallePedido(this.detalle).subscribe({
      next: (resp) => {
        alert(resp); // "Guardado"
        this.router.navigate(['/listarDetallePedido']);
      },
      error: (e) => {
        console.error(e);
        alert("Error al guardar");
      }
    });
  }

  cancelar() {
    this.router.navigate(['/listarDetallePedido']);
  }
}

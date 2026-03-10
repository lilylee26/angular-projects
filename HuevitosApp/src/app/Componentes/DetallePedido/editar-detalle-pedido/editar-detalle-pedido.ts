import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DetallePedido } from '../../../Entidades/DetallePedido';
import { ServiceWs } from '../../../Service/service-ws';

@Component({
  selector: 'app-editar-detalle-pedido',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-detalle-pedido.html'
})
export class EditarDetallePedido implements OnInit {

  id!: number;
  detalle: DetallePedido = new DetallePedido();

  constructor(
    private route: ActivatedRoute,
    private service: ServiceWs,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.service.buscarDetallePedido(this.id).subscribe({
      next: (data) => this.detalle = data,
      error: () => {
        alert('No se pudo cargar el detalle');
        this.router.navigate(['/listarDetallePedido']);
      }
    });
  }

  actualizar() {
    this.detalle.idDetalle = this.id;

    // asegurar números
    this.detalle.idPedido = Number(this.detalle.idPedido);
    this.detalle.idProducto = Number(this.detalle.idProducto);
    this.detalle.cantidad = Number(this.detalle.cantidad);
    this.detalle.precioUnitario = Number(this.detalle.precioUnitario);
    this.detalle.tiendaId = Number(this.detalle.tiendaId);

    this.service.editarDetallePedido(this.detalle).subscribe({
      next: (resp) => {
        alert(resp); // "Editado"
        this.router.navigate(['/listarDetallePedido']);
      },
      error: (e) => {
        console.error(e);
        if (e.status === 404) alert(e.error);
        else alert('Error al actualizar');
      }
    });
  }

  cancelar() {
    this.router.navigate(['/listarDetallePedido']);
  }
}

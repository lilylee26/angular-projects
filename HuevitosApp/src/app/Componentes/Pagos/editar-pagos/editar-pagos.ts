import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pago } from '../../../Entidades/Pago';
import { ServiceWs } from '../../../Service/service-ws';

@Component({
  selector: 'app-editar-pagos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-pagos.html'
})
export class EditarPagos implements OnInit {

  id!: number;
  pago: Pago = new Pago();
  estados: string[] = ['PENDIENTE', 'PAGADO', 'CANCELADO'];

  constructor(
    private route: ActivatedRoute,
    private service: ServiceWs,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.service.buscarPago(this.id).subscribe({
      next: (data) => this.pago = data,
      error: () => {
        alert('No se pudo cargar el pago');
        this.router.navigate(['/listarPagos']);
      }
    });
  }

  actualizar() {
    this.pago.idPago = this.id;

    this.pago.idPedido = Number(this.pago.idPedido);
    this.pago.tiendaId = Number(this.pago.tiendaId);
    this.pago.monto = Number(this.pago.monto);

    this.service.editarPago(this.pago).subscribe({
      next: (resp) => {
        alert(resp); // "Editado"
        this.router.navigate(['/listarPagos']);
      },
      error: (e) => {
        console.error(e);
        if (e.status === 404) alert(e.error);
        else alert('Error al actualizar');
      }
    });
  }

  cancelar() {
    this.router.navigate(['/listarPagos']);
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Pago } from '../../../Entidades/Pago';
import { ServiceWs } from '../../../Service/service-ws';

@Component({
  selector: 'app-guardar-pagos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './guardar-pagos.html'
})
export class GuardarPagos {

  pago: Pago = new Pago();

  // para el select (enum del backend)
  estados: string[] = ['PENDIENTE', 'PAGADO', 'CANCELADO'];

  constructor(private service: ServiceWs, private router: Router) { }

  guardar() {
    (this.pago as any).idPago = null;

    // asegurar números
    this.pago.idPedido = Number(this.pago.idPedido);
    this.pago.tiendaId = Number(this.pago.tiendaId);
    this.pago.monto = Number(this.pago.monto);

    // si no mandas fecha, pon la actual en formato LocalDateTime
    if (!this.pago.fechaPago || this.pago.fechaPago.trim() === '') {
      const now = new Date();
      // yyyy-MM-ddTHH:mm:ss
      const iso = now.toISOString().slice(0, 19);
      this.pago.fechaPago = iso;
    }

    this.service.guardarPago(this.pago).subscribe({
      next: (resp) => {
        alert(resp); // "Guardado"
        this.router.navigate(['/listarPagos']);
      },
      error: (e) => {
        console.error(e);
        alert('Error al guardar');
      }
    });
  }

  cancelar() {
    this.router.navigate(['/listarPagos']);
  }
}

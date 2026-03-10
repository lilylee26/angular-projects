import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Pedido } from '../../../Entidades/Pedido';
import { ServiceWs } from '../../../Service/service-ws';

@Component({
  selector: 'app-guardar-pedidos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './guardar-pedidos.html'
})
export class GuardarPedidos {

  pedido: Pedido = new Pedido();

  estados: string[] = [
    'PENDIENTE',
    'CONFIRMADO',
    'PREPARANDO',
    'REPARTIENDO',
    'ENTREGADO',
    'CANCELADO'
  ];

  constructor(private service: ServiceWs, private router: Router) { }

  guardar() {
    (this.pedido as any).idPedido = null;

    this.service.guardarPedido(this.pedido).subscribe({
      next: (resp) => {
        alert(resp); // va a mostrar "Guardado"
        this.router.navigate(['/listarPedido']);
      },
      error: (e) => {
        console.error(e);
        alert("Error al guardar");
      }
    });
  };


  cancelar() {
    this.router.navigate(['/listarPedido']);
  }
}

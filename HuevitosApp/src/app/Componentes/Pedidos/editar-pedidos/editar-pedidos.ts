import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido } from '../../../Entidades/Pedido';
import { ServiceWs } from '../../../Service/service-ws';

@Component({
  selector: 'app-editar-pedidos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-pedidos.html'
})
export class EditarPedidos implements OnInit {

  id!: number;
  pedido: Pedido = new Pedido();

  constructor(
    private route: ActivatedRoute,
    private service: ServiceWs,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.service.buscarPedido(this.id).subscribe({
      next: (data) => {
        this.pedido = data;
      },
      error: () => {
        alert('No se pudo cargar el pedido');
        this.router.navigate(['/listarPedido']);
      }
    });
  }

  actualizar(): void {
    this.service.editarPedido(this.id, this.pedido).subscribe({
      next: () => {
        alert('Pedido actualizado');
        this.router.navigate(['/listarPedido']);
      },
      error: (e) => {
        if (e.status === 409) alert(e.error);
        else alert('Error al actualizar');
      }
    });
  }

  cancelar(): void {
    this.router.navigate(['/listarPedido']);
  }
}

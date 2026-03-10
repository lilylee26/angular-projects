import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from '../../../Entidades/Pedido';
import { ServiceWs } from '../../../Service/service-ws';

@Component({
  selector: 'app-listar-pedidos',
  standalone: true,
  imports: [],
  templateUrl: './listar-pedidos.html',
  styleUrl: './listar-pedidos.css',
})
export class ListarPedidos implements OnInit {

  pedido: Pedido = new Pedido();
  pedidos: Pedido[] = [];

  constructor(
    private router: Router,
    private service: ServiceWs,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.listarPedido();
  }

  listarPedido() {
    this.service.listarPedido().subscribe(data => {
      this.pedidos = data;
      this.changeDetector.detectChanges();
    });
  }

  editar(id: number) {
    this.router.navigate(['/editarPedido', id]);
    this.changeDetector.detectChanges();
  }

  eliminar(id: number) {
    const ok = confirm('¿Seguro que deseas eliminar este pedido?');
    if (!ok) return;

    this.service.eliminarPedido(id).subscribe({
      next: () => {
        alert('Pedido eliminado');
        this.listarPedido();
        this.changeDetector.detectChanges();
      },
      error: () => alert('Error al eliminar')
    });
  }

  irGuardar() {
    this.router.navigate(['/guardarPedido']);
  }
}



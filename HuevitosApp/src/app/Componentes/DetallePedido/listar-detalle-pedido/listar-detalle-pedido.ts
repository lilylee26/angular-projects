import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetallePedido } from '../../../Entidades/DetallePedido';
import { ServiceWs } from '../../../Service/service-ws';

@Component({
  selector: 'app-listar-detalle-pedido',
  standalone: true,
  imports: [],
  templateUrl: './listar-detalle-pedido.html',
  styleUrl: './listar-detalle-pedido.css',
})
export class ListarDetallePedido implements OnInit {

  detalles: DetallePedido[] = [];

  constructor(
    private router: Router,
    private service: ServiceWs,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.service.listarDetallePedido().subscribe(data => {
      this.detalles = data;
      this.changeDetector.detectChanges();
    });
  }

  editar(idDetalle: number) {
    this.router.navigate(['/editarDetallePedido', idDetalle]);
  }

  eliminar(idDetalle: number) {
    const ok = confirm('¿Seguro que deseas eliminar este detalle?');
    if (!ok) return;

    this.service.eliminarDetallePedido(idDetalle).subscribe({
      next: (resp) => {
        alert(resp); // "Eliminado"
        this.listar();
      },
      error: (e) => {
        console.error(e);
        alert('Error al eliminar');
      }
    });
  }

  irGuardar() {
    this.router.navigate(['/guardarDetallePedido']);
  }
}

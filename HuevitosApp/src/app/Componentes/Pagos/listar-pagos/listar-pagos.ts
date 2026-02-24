import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pago } from '../../../Entidades/Pago';
import { ServiceWs } from '../../../Service/service-ws';

@Component({
  selector: 'app-listar-pagos',
  standalone: true,
  imports: [],
  templateUrl: './listar-pagos.html',
  styleUrl: './listar-pagos.css',
})
export class ListarPagos implements OnInit {

  pagos: Pago[] = [];

  constructor(
    private router: Router,
    private service: ServiceWs,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.service.listarPagos().subscribe(data => {
      this.pagos = data;
      this.changeDetector.detectChanges();
    });
  }

  editar(idPago: number) {
    this.router.navigate(['/editarPago', idPago]);
  }

  eliminar(idPago: number) {
    const ok = confirm('¿Seguro que deseas eliminar este pago?');
    if (!ok) return;

    this.service.eliminarPago(idPago).subscribe({
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
    this.router.navigate(['/guardarPago']);
  }
}

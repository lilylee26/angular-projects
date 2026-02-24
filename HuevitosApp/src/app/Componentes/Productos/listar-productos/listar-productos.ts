import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../../../Entidades/Producto';
import { ServiceWs } from '../../../Service/service-ws';

@Component({
  selector: 'app-listar-productos',
  standalone: true,
  imports: [],
  templateUrl: './listar-productos.html',
  styleUrl: './listar-productos.css',
})
export class ListarProductos implements OnInit {

  productos: Producto[] = [];

  constructor(
    private router: Router,
    private service: ServiceWs,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.listarProducto();
  }

  listarProducto() {
    this.service.listarProducto().subscribe({
      next: (data) => {
        this.productos = data;
        this.changeDetector.detectChanges();
      },
      error: (e) => {
        console.error(e);
        this.productos = [];
        this.changeDetector.detectChanges();
      }
    });
  }

  editar(id: number) {
    this.router.navigate(['/editarProducto', id]);
  }

  eliminar(id: number) {
    const ok = confirm('¿Seguro que deseas eliminar este producto?');
    if (!ok) return;

    this.service.eliminarProducto(id).subscribe({
      next: (resp) => {
        alert(resp); // "Eliminado con exito"
        this.listarProducto();
      },
      error: (e) => {
        console.error(e);
        if (e.status === 409) alert(e.error);
        else alert('Error al eliminar');
      }
    });
  }

  irGuardar() {
    this.router.navigate(['/guardarProducto']);
  }
}

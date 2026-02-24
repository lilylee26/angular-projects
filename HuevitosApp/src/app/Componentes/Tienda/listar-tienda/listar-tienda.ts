import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { ServiceWs } from '../../../Service/service-ws';
import { Tienda } from '../../../Entidades/Tienda';

@Component({
  selector: 'app-listar-tienda',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-tienda.html',
  styleUrl: './listar-tienda.css'
})
export class ListarTienda implements OnInit {

  tiendas: Tienda[] = [];

  constructor(
    private service: ServiceWs,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.listarTienda();
  }

  listarTienda(): void {
    this.service.ListarTiendas().subscribe({
      next: (data) => {
        this.tiendas = data || [];
        console.log('TIENDAS:', this.tiendas);
        this.cd.detectChanges();
      },
      error: (e) => {
        console.error(e);
        alert('Error al cargar tiendas');
      }
    });
  }

  editar(idTienda?: number) {
    if (!idTienda) return;
    this.router.navigate(['/editarTienda', idTienda]);
  }

  eliminar(idTienda?: number) {
    if (!idTienda) return;
    if (!confirm('¿Eliminar tienda?')) return;

    this.service.EliminarTienda(idTienda).subscribe({
      next: () => {
        alert('Eliminado');
        this.listarTienda();
      },
      error: (e) => {
        console.error(e);
        alert('Error al eliminar');
      }
    });
  }
}

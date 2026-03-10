import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { ServiceWs } from '../../../Service/service-ws';
import { Tienda } from '../../../Entidades/Tienda';

@Component({
  selector: 'app-editar-tienda',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './editar-tienda.html',
  styleUrl: './editar-tienda.css'
})
export class EditarTienda implements OnInit {

  idTienda!: number;

  tienda: Tienda = {
    nombre: '',
    telefono: 0,
    email: ''
  } as Tienda;

  constructor(
    private service: ServiceWs,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.idTienda = Number(this.route.snapshot.paramMap.get('id'));

    /* if (!this.idTienda) {
      alert('ID inválido');
      return this.router.navigate(['/listarTienda']);
    }
 */
    // ✅ cargar datos para editar
    this.service.BuscarTienda(this.idTienda).subscribe({
      next: (data) => {
        this.tienda = data;
      },
      error: (e) => {
        console.error(e);
        alert('No se pudo cargar la tienda');
        this.router.navigate(['/listarTienda']);
      }
    });
  }

  editar(): void {
    if (!this.tienda.nombre?.trim()) return alert('Falta nombre');
    if (!this.tienda.telefono) return alert('Falta teléfono');
    if (!this.tienda.email?.trim()) return alert('Falta email');

    this.service.EditarTienda(this.idTienda, this.tienda).subscribe({
      next: () => {
        alert('Actualizado');
        this.router.navigate(['/listarTienda']);
      },
      error: (e) => {
        console.error(e);
        alert('Error al editar');
      }
    });
  }

  cancelar(): void {
    this.router.navigate(['/listarTienda']);
  }
}

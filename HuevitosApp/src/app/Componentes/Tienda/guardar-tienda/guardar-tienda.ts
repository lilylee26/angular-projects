import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { ServiceWs } from '../../../Service/service-ws';
import { Tienda } from '../../../Entidades/Tienda';

@Component({
  selector: 'app-guardar-tienda',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './guardar-tienda.html',
  styleUrl: './guardar-tienda.css'
})
export class GuardarTienda {

  tienda: Tienda = {
    // NO mandes id al guardar (que lo genere la DB)
    nombre: '',
    telefono: 0,
    email: ''
  } as Tienda;

  constructor(private service: ServiceWs, private router: Router) {}

  guardar() {
    if (!this.tienda.nombre?.trim()) return alert('Falta nombre');
    if (!this.tienda.telefono) return alert('Falta teléfono');
    if (!this.tienda.email?.trim()) return alert('Falta email');

    this.service.GuardarTienda(this.tienda).subscribe({
      next: () => {
        alert('Guardado');
        this.router.navigate(['/listarTienda']);
      },
      error: (e) => {
        console.error(e);
        alert('Error al guardar');
      }
    });
  }

  cancelar() {
    this.router.navigate(['/listarTienda']);
  }
}

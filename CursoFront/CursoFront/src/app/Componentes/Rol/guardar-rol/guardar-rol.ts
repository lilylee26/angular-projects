import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { Rol } from '../../../Entidades/rol.model';
import { ServiceRol } from '../../../Service/service-rol';

@Component({
  selector: 'app-guardar-rol',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './guardar-rol.html',
  styleUrl: './guardar-rol.css'
})
export class GuardarRolComponent {

  rol: Rol = new Rol();

  constructor(private service: ServiceRol, private router: Router) {}

  guardar(): void {
    this.rol.idRol = null;

    this.service.guardar(this.rol).subscribe({
      next: () => {
        alert('Rol guardado');
        this.router.navigate(['/listar-rol']);
      },
      error: (e) => {
        console.error(e);
        alert(e.error || 'Error al guardar');
      }
    });
  }

  regresar(): void {
    this.router.navigate(['/listar-rol']);
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { Rol } from '../../../Entidades/rol.model';
import { ServiceRol } from '../../../Service/service-rol';

@Component({
  selector: 'app-listar-rol',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-rol.html',
  styleUrl: './listar-rol.css'
})
export class ListarRolComponent implements OnInit {

  roles: Rol[] = [];

  constructor(private service: ServiceRol, private router: Router) {}

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.service.listar().subscribe({
      next: (data) => this.roles = data,
      error: (e) => console.error(e)
    });
  }

  nuevo(): void {
    this.router.navigate(['/guardar-rol']);
  }

  editar(id: any): void {
    this.router.navigate([`/editar-rol/${id}`]);
  }

  eliminar(id: any): void {
    if (confirm('¿Seguro que deseas eliminar el rol?')) {
      this.service.eliminar(id).subscribe({
        next: () => {
          alert('Rol eliminado');
          this.listar();
        },
        error: (e) => {
          console.error(e);
          alert(e.error || 'Error al eliminar');
        }
      });
    }
  }

  irUsuarios(): void {
    this.router.navigate(['/listar-usuario']);
  }
}

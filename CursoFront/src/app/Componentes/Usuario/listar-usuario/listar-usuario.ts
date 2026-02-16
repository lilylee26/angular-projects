import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Usuario } from '../../../Entidades/usuario.model';
import { Rol } from '../../../Entidades/rol.model';
import { ServiceUsuario } from '../../../Service/service-usuario';
import { ServiceRol } from '../../../Service/service-rol';

@Component({
  selector: 'app-listar-usuario',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './listar-usuario.html',
  styleUrl: './listar-usuario.css'
})
export class ListarUsuarioComponent implements OnInit {

  usuarios: Usuario[] = [];
  roles: Rol[] = [];

  q: string = '';
  idRolSeleccionado: number = 0;

  constructor(
    private usuarioService: ServiceUsuario,
    private rolService: ServiceRol,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listar();
    this.cargarRoles();
  }

  listar(): void {
    this.usuarioService.listar().subscribe({
      next: (data) => this.usuarios = data,
      error: (e) => console.error(e)
    });
  }

  cargarRoles(): void {
    this.rolService.listar().subscribe({
      next: (data) => this.roles = data,
      error: (e) => console.error(e)
    });
  }

  nuevo(): void {
    this.router.navigate(['/guardar-usuario']);
  }

  editar(id: any): void {
    this.router.navigate([`/editar-usuario/${id}`]);
  }

  eliminar(id: any): void {
    if (confirm('¿Seguro que deseas eliminar el usuario?')) {
      this.usuarioService.eliminar(id).subscribe({
        next: () => {
          alert('Usuario eliminado');
          this.listar();
        },
        error: (e) => {
          console.error(e);
          alert(e.error || 'Error al eliminar');
        }
      });
    }
  }

  buscar(): void {
    if (!this.q.trim()) {
      this.listar();
      return;
    }

    this.usuarioService.buscarPorTexto(this.q).subscribe({
      next: (data) => this.usuarios = data,
      error: (e) => {
        console.error(e);
        alert(e.error || 'Error en búsqueda');
      }
    });
  }

  filtrarPorRol(): void {
    if (!this.idRolSeleccionado || this.idRolSeleccionado === 0) {
      this.listar();
      return;
    }

    this.usuarioService.buscarPorRol(this.idRolSeleccionado).subscribe({
      next: (data) => this.usuarios = data,
      error: (e) => {
        console.error(e);
        alert(e.error || 'Error al filtrar por rol');
      }
    });
  }

  limpiarFiltros(): void {
    this.q = '';
    this.idRolSeleccionado = 0;
    this.listar();
  }

  irRoles(): void {
    this.router.navigate(['/listar-rol']);
  }
}

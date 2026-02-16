import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { Usuario } from '../../../Entidades/usuario.model';
import { Rol } from '../../../Entidades/rol.model';
import { ServiceUsuario } from '../../../Service/service-usuario';
import { ServiceRol } from '../../../Service/service-rol';

@Component({
  selector: 'app-editar-usuario',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './editar-usuario.html',
  styleUrl: './editar-usuario.css'
})
export class EditarUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();
  roles: Rol[] = [];
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private usuarioService: ServiceUsuario,
    private rolService: ServiceRol,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.usuario.rol = new Rol();
    this.usuario.correo = '';

    this.cargarRoles();
    this.cargarUsuario();
  }

  cargarRoles(): void {
    this.rolService.listar().subscribe({
      next: (data) => this.roles = data,
      error: (e) => console.error(e)
    });
  }

  cargarUsuario(): void {
    this.usuarioService.buscarPorId(this.id).subscribe({
      next: (data) => {
        this.usuario = data;
        if (!this.usuario.rol) this.usuario.rol = new Rol();
      },
      error: (e) => {
        console.error(e);
        alert('No se encontró el usuario');
        this.router.navigate(['/listar-usuario']);
      }
    });
  }

  editar(): void {
    this.usuarioService.editar(this.id, this.usuario).subscribe({
      next: () => {
        alert('Actualizado');
        this.router.navigate(['/listar-usuario']);
      },
      error: (e) => {
        console.error(e);
        alert(e.error || 'Error al editar');
      }
    });
  }

  regresar(): void {
    this.router.navigate(['/listar-usuario']);
  }
}

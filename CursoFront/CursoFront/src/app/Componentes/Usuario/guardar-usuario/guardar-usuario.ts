import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { Usuario } from '../../../Entidades/usuario.model';
import { Rol } from '../../../Entidades/rol.model';
import { ServiceUsuario } from '../../../Service/service-usuario';
import { ServiceRol } from '../../../Service/service-rol';

@Component({
  selector: 'app-guardar-usuario',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './guardar-usuario.html',
  styleUrl: './guardar-usuario.css'
})
export class GuardarUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();
  roles: Rol[] = [];

  constructor(
    private usuarioService: ServiceUsuario,
    private rolService: ServiceRol,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usuario.idUsuario = null;
    this.usuario.rol = new Rol();
    this.usuario.correo = ''; // se genera en backend
    this.usuario.fechaCreacion = '';
    this.cargarRoles();
  }

  cargarRoles(): void {
    this.rolService.listar().subscribe({
      next: (data) => this.roles = data,
      error: (e) => console.error(e)
    });
  }

  guardar(): void {
    this.usuarioService.guardar(this.usuario).subscribe({
      next: () => {
        alert('Guardado');
        this.router.navigate(['/listar-usuario']);
      },
      error: (e) => {
        console.error(e);
        alert(e.error || 'Error al guardar');
      }
    });
  }

  regresar(): void {
    this.router.navigate(['/listar-usuario']);
  }
}

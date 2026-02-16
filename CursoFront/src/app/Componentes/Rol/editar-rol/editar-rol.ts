import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { Rol } from '../../../Entidades/rol.model';
import { ServiceRol } from '../../../Service/service-rol';

@Component({
  selector: 'app-editar-rol',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './editar-rol.html',
  styleUrl: './editar-rol.css',
})
export class EditarRol implements OnInit {

  rol: Rol = new Rol();
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private service: ServiceRol,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.rol.idRol = this.id; // el id viene en la URL
  }

  editar(): void {
    this.service.editar(this.id, this.rol).subscribe({
      next: () => {
        alert('Rol actualizado');
        this.router.navigate(['/listar-rol']);
      },
      error: (e: any) => {
        console.error(e);
        alert(e.error || 'Error al editar');
      }
    });
  }

  regresar(): void {
    this.router.navigate(['/listar-rol']);
  }
}

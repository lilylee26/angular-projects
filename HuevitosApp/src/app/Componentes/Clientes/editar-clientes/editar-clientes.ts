import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../../Entidades/Cliente';
import { ServiceWs } from '../../../Service/service-ws';

@Component({
  selector: 'app-editar-clientes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-clientes.html'
})
export class EditarClientes implements OnInit {

  id!: number;
  cliente: Cliente = new Cliente();

  constructor(
    private route: ActivatedRoute,
    private service: ServiceWs,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.service.buscarCliente(this.id).subscribe({
      next: (data) => {
        this.cliente = data; // aquí se llena el formulario
      },
      error: () => {
        alert('No se pudo cargar el cliente');
        this.router.navigate(['/listarCliente']);
      }
    });
  }

  actualizar(): void {
    this.service.editarCliente(this.id, this.cliente).subscribe({
      next: () => {
        alert('Cliente actualizado');
        this.router.navigate(['/listarCliente']);
      },
      error: (e) => {
        if (e.status === 409) alert(e.error);
        else alert('Error al actualizar');
      }
    });
  }

  cancelar(): void {
    this.router.navigate(['/listarCliente']);
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from '../../../Entidades/Cliente';
import { ServiceWs } from '../../../Service/service-ws';

@Component({
  selector: 'app-guardar-clientes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './guardar-clientes.html'
})
export class GuardarClientes {

  mensaje = '';
  tipo = ''; // success | error | warning
  mostrar = false;

  mostrarAlerta(texto: string, tipo: string) {
    this.mensaje = texto;
    this.tipo = tipo;
    this.mostrar = true;

    setTimeout(() => {
      this.mostrar = false;
    }, 3000); // se quita sola
  }


  cliente: Cliente = new Cliente();

  constructor(private service: ServiceWs, private router: Router) { }

  guardar() {
    this.service.guardarCliente(this.cliente).subscribe({
      next: (resp) => {
        alert("Se registró con éxito");
        this.router.navigate(['/listarCliente']);
      },
      error: (e) => {
        // Si backend manda mensaje (409)
        if (e.status === 409) {
          alert(e.error); // "Ese cliente ya existe" o "El telefono ya existe"
        } else {
          alert("Error al guardar");
          console.error(e);
        }
      }
    });
  }


  cancelar() {
    this.router.navigate(['/listarCliente']);
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceWS } from '../../Service/service-ws';
import { Computadora } from '../../Entidades/Computadora';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-guardar-compus',
  imports: [FormsModule],
  templateUrl: './guardar-compus.html',
  styleUrl: './guardar-compus.css',
})
export class GuardarCompus {

  constructor(private router: Router, private service: ServiceWS) {}

  //instanciar el objeto 
  compu: Computadora = new Computadora();

  //metodo para mandar aguardar el elemento a la base de datos \
  guardar() {
    this.service.guardarCompu(this.compu).subscribe(data => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: JSON.stringify(data),
        showConfirmButton: false,
        timer: 2500
      });
      this.router.navigate(['listar'])
    })
  }

}

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceWS } from '../../Service/service-ws';
import { Computadora } from '../../Entidades/Computadora';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-compus',
  imports: [FormsModule],
  templateUrl: './editar-compus.html',
  styleUrl: './editar-compus.css',
})
export class EditarCompus implements OnInit {

  //inyectar las clases para nevegar y usar  los metodos de peticiones http
  constructor(private router: Router, private service: ServiceWS,  private changeDetectorRef: ChangeDetectorRef) { }

  compu: Computadora = new Computadora();

  ngOnInit(): void {
    this.buscarCompus()
  }


  buscarCompus() {
    let compuString = localStorage.getItem('idCompu');
    this.compu.idComputadora = Number(compuString);
    this.service.buscarCompu(this.compu.idComputadora).subscribe(data => {
      this.compu = data;
      Swal.fire({
        title: "Editar",
        icon: "success",
        text: "informacion cargada",
        draggable: true
      });
      this.changeDetectorRef.detectChanges();
    })
  }

  editarDatos(){
    this.service.editarCompu(this.compu).subscribe(data =>{
      Swal.fire({
        title: "Editar",
        icon: "success",
        text: JSON.stringify(data),
        showConfirmButton: false,
        timer : 2500
      });
      this.router.navigate(['listar']);
    }

    )
  }

}

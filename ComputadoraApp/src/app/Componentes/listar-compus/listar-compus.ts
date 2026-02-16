import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceWS } from '../../Service/service-ws';
import { Computadora } from '../../Entidades/Computadora';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-compus',
  imports: [],
  templateUrl: './listar-compus.html',
  styleUrl: './listar-compus.css',
})

//OnInit es un ciclo de vida, que se carga una vez que el html se cargo, pero este de aqui nos indica en que momento
//de la vida de mi html, se cargara la infromacion que este solicitada:
//Al ser un listado de computadoras, nececito que se cargue el incio de la vida de mi htmla, para visualizar todo sin
//la necesidad recarga la pagina o clicar un boton en especifico
export class ListarCompus implements OnInit {

  //agregar un constructor para inyectar clases
  constructor(private router: Router, private service: ServiceWS, private changeDetectorRef: ChangeDetectorRef) { }

  //instanciar el objeto
  compu: Computadora = new Computadora();
  compus !: Computadora[];
  //este metodo es el que se encarga de que el ciclo de vida funciones coreectamente, O Sea cergara automaticamente la
  //infromacion que yo le indique aqui.
  ngOnInit(): void {
    //el flujo de datos que estoy recibi al hacer la peticion http, debe de ir en este metodo que aplica el ciclo de vida
    this.listarC();
  }

  //metodo que utiliza al metodo dentro de el service el cual hace la peticion de listar en controlador backend
  listarC() {
    //subcribe es como un tipo de manejador de datos, o sea meneja de forma correcta el flujo de datos que voy a recibir
    //al hacer la petcion a mi controlador de listar
    this.service.listarCompu().subscribe(data => {
      this.compus = data
      console.log('listado exitoso' + JSON.stringify(data)); //imprime en la consola del navegador la respuesta de mi
      //controlador backend, no debe de usarse en una aplicacion en produccion
      this.changeDetectorRef.detectChanges();
    })
  }

  //un metodo para redireccionar al componentes de editar
  editarButon(computadora: Computadora) {
    //almacenamos temporalmente los datos del cel, para poder obtener informacion
    localStorage.setItem('idComputadora', computadora.idComputadora.toString());
    this.router.navigate(['editar']);
  }

  eliminarButtom(compu: Computadora) {
    Swal.fire({
      title: "Seguro que quieres eliminar el id: " + compu.idComputadora + "?",
      text: "Este movimiento no se puede revertir",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminalo!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.eliminarCompu(compu.idComputadora).subscribe(data => {
          Swal.fire({
            title: "Eliminado!",
            text: JSON.stringify(data),
            icon: "success"
          });
          //this.router.navigate(['listar'])
          this.listarC();
        });

      }else if(result.isDismissed){
        Swal.fire({
            title: "Cancelado",
            text : "La eliminacion fue cancelada",
            icon: "info"
          });
      }
    });
  }



}

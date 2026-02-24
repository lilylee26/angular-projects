import { ServiceWs } from './../../../Service/service-ws';
import { Cliente } from './../../../Entidades/Cliente';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { routes } from '../../../app.routes';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listar-clientes',
  imports: [],
  templateUrl: './listar-clientes.html',
  styleUrl: './listar-clientes.css',
})
//se utiliza ciclos de vida o lifecycle hook: para terminar de construir la informacion es decir en este ccaso cuando me interesa
//visualizar la informacion del listado que voy a recibir de los clientes (una vez que ya se realizo
//la peticion http: yo con html y con css puedo estableces que en el navegar se visualice una tabla y necseito que esa tabla se
//llene con la informacion http y hacen eso)

//este ciclo onInit se activa una vez que yo ingres al componetne con el Listar, la intencion es que al entrar
//se cargue el listado en clientes
export class ListarClientes implements OnInit {
  constructor(private router: Router, private service: ServiceWs, private ChangeDetector: ChangeDetectorRef) { }
  //instanciar el objeto y crear lista
  cliente: Cliente = new Cliente();
  clientes: Cliente[] = [];

  ngOnInit(): void {
    //metodo que se encarga de
    this.listarCliente();
  }

  listarCliente() {
    return this.service.listarCliente().subscribe(data => {
      this.clientes = data;
      //console.log(JSON.stringify(data));
      this.ChangeDetector.detectChanges();
    })
  }

  editar(id: number) {
    this.router.navigate(['/editarCliente', id]);
    this.ChangeDetector.detectChanges();
  }



  eliminar(id: number) {
    const ok = confirm('¿Seguro que deseas eliminar este cliente?');
    if (!ok) return;
this.ChangeDetector.detectChanges();
    this.service.eliminarCliente(id).subscribe({
      next: () => {
        alert('Cliente eliminado');
        this.ChangeDetector.detectChanges();
        this.listarCliente();
      },
      error: () => alert('Error al eliminar')
    });
}




}


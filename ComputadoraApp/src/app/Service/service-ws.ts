import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Computadora } from '../Entidades/Computadora';

@Injectable({
  providedIn: 'root',
})
//clase que me permitora crear metodos que haran petciones a mi clase de controlador en el backend
export class ServiceWS {
  //incializar el httpClient para que me permita hacer peticiones http
  constructor(private http : HttpClient){}

  //configurar una variable que contenga la url del controlador
  url = "http://localhost:8002/api/Compu";

  //configrar los metodos qye haran las peticones
  listarCompu(){
    return this.http.get<Computadora[]>(this.url + "/listar");
  }

  guardarCompu(computadora : Computadora){
    return this.http.post<String>(this.url + "/guardar", computadora, {responseType : "text" as "json"})
  }

  buscarCompu(idComputadora : number){
    return this.http.get<Computadora>(`${this.url}/buscar/${idComputadora}`);

  }

  editarCompu(computadora : Computadora){
    return this.http.put<String>(this.url + "/editar", computadora, {responseType : "text" as "json"});
  }


  eliminarCompu(idCompu : number){
    return this.http.delete<String>(`${this.url}/eliminar/${idCompu}`, {responseType : "text" as "json"})
  }

}

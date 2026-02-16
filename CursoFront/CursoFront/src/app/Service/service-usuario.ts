import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../Entidades/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceUsuario {

  private url = 'http://localhost:8010/usuarios';

  constructor(private http: HttpClient) {}

  listar(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url);
  }

  buscarPorId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url}/${id}`);
  }

  guardar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url, usuario);
  }

  editar(id: number, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.url}/${id}`, usuario);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, { responseType: 'text' });
  }

  // GET /usuarios/buscar?q=...
  buscarPorTexto(q: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.url}/buscar?q=${encodeURIComponent(q)}`);
  }

  // GET /usuarios/rol/{idRol}
  buscarPorRol(idRol: number): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.url}/rol/${idRol}`);
  }
}

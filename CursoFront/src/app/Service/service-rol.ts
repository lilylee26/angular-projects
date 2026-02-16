import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rol } from '../Entidades/rol.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceRol {

  private url = 'http://localhost:8010/roles';

  constructor(private http: HttpClient) {}

  listar(): Observable<Rol[]> {
    return this.http.get<Rol[]>(this.url);
  }

  guardar(rol: Rol): Observable<Rol> {
    return this.http.post<Rol>(this.url, rol);
  }

  editar(id: number, rol: Rol): Observable<Rol> {
    return this.http.put<Rol>(`${this.url}/${id}`, rol);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, { responseType: 'text' });
  }
}

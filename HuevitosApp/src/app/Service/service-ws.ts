import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListarClientes } from '../Componentes/Clientes/listar-clientes/listar-clientes';
import { Cliente } from '../Entidades/Cliente';
import { Pedido } from '../Entidades/Pedido';
import { Producto } from '../Entidades/Producto';
import { DetallePedido } from '../Entidades/DetallePedido';
import { Pago } from '../Entidades/Pago';
import { Tienda } from '../Entidades/Tienda';

import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root',
})
export class ServiceWs {

  //establecer un constructor para inicializar el http protocol
  constructor(private http: HttpClient) { }

  url = "http://localhost:9000";
  CLIENTE = this.url + "/C";
  PEDIDO = this.url + "/PP";
  PRODUCTO = this.url + "/P";
  DETALLE = this.url + "/DP";
  PAGOS = this.url + "/PG";
  TIENDA = this.url + "/Tienda";
  private urlTienda = 'http://localhost:9000/Tienda';

  // clientes
  listarCliente() {
    return this.http.get<Cliente[]>(this.url + "/C");
  }

  buscarCliente(id: number) {
    return this.http.get<Cliente>(this.CLIENTE + "/" + id);
  }

  guardarCliente(cliente: Cliente) {
    return this.http.post<Cliente>(this.CLIENTE, cliente);
  }

  editarCliente(id: number, cliente: Cliente) {
    return this.http.put(this.CLIENTE + "/" + id, cliente, { responseType: 'text' as 'json' });
  }

  eliminarCliente(id: number) {
    return this.http.delete(this.CLIENTE + '/' + id, { responseType: 'text' });
  }

  // pedido
  listarPedido() {
    return this.http.get<Pedido[]>(this.url + "/PP");
  }

  buscarPedido(id: number) {
    return this.http.get<Pedido>(this.PEDIDO + "/" + id);
  }

  guardarPedido(pedido: Pedido) {
    return this.http.post(this.PEDIDO, pedido, { responseType: 'text' });
  }

  editarPedido(id: number, pedido: Pedido) {
    return this.http.put(this.PEDIDO + "/" + id, pedido, { responseType: 'text' as 'json' });
  }

  eliminarPedido(id: number) {
    return this.http.delete(this.PEDIDO + '/' + id, { responseType: 'text' });
  }

  //producto
  listarProducto() {
    return this.http.get<Producto[]>(this.PRODUCTO); // GET /P
  }

  buscarProducto(id: number) {
    return this.http.get<Producto>(this.PRODUCTO + "/" + id); // GET /P/{idProducto}
  }

  // POST /P -> "Producto registrado con exito"
  guardarProducto(producto: Producto) {
    return this.http.post(this.PRODUCTO, producto, { responseType: 'text' });
  }

  // OJO: TU EDITAR ES PUT /P (NO /P/{id})
  editarProducto(producto: Producto) {
    return this.http.put(this.PRODUCTO, producto, { responseType: 'text' });
  }

  // DELETE /P/{idProducto} -> "Eliminado con exito"
  eliminarProducto(id: number) {
    return this.http.delete(this.PRODUCTO + "/" + id, { responseType: 'text' });
  }

  // GET /P/tienda/{idTienda}
  listarProductoPorTienda(idTienda: number) {
    return this.http.get<Producto[]>(this.PRODUCTO + "/tienda/" + idTienda);
  }

  // PUT /P/stock/{idProducto}/{cambio}
  ajustarStock(idProducto: number, cambio: number) {
    return this.http.put(this.PRODUCTO + "/stock/" + idProducto + "/" + cambio, null, { responseType: 'text' });
  }


  //detalle pedido
  // LISTAR
  listarDetallePedido() {
    return this.http.get<DetallePedido[]>(this.DETALLE);
  }

  // BUSCAR
  buscarDetallePedido(idDetalle: number) {
    return this.http.get<DetallePedido>(this.DETALLE + "/" + idDetalle);
  }

  // GUARDAR (regresa texto "Guardado")
  guardarDetallePedido(detalle: DetallePedido) {
    return this.http.post(this.DETALLE, detalle, { responseType: 'text' });
  }

  // EDITAR (regresa texto "Editado")  -> OJO: tu PUT es /DP (SIN /{id})
  editarDetallePedido(detalle: DetallePedido) {
    return this.http.put(this.DETALLE, detalle, { responseType: 'text' });
  }

  // ELIMINAR (regresa texto "Eliminado")
  eliminarDetallePedido(idDetalle: number) {
    return this.http.delete(this.DETALLE + "/" + idDetalle, { responseType: 'text' });
  }

  // FILTROS
  listarDetallePorPedido(idPedido: number) {
    return this.http.get<DetallePedido[]>(this.DETALLE + "/listarPorPedido/" + idPedido);
  }

  listarDetallePorProducto(idProducto: number) {
    return this.http.get<DetallePedido[]>(this.DETALLE + "/listarPorProducto/" + idProducto);
  }

  listarDetallePorTienda(tiendaId: number) {
    return this.http.get<DetallePedido[]>(this.DETALLE + "/listarPorTienda/" + tiendaId);
  }



  //pagos
  // LISTAR
  listarPagos() {
    return this.http.get<Pago[]>(this.PAGOS);
  }

  // BUSCAR
  buscarPago(idPago: number) {
    return this.http.get<Pago>(this.PAGOS + "/" + idPago);
  }

  // GUARDAR -> regresa texto "Guardado"
  guardarPago(pago: Pago) {
    return this.http.post(this.PAGOS, pago, { responseType: 'text' });
  }

  // EDITAR -> regresa texto "Editado"  (tu PUT es /PG SIN /{id})
  editarPago(pago: Pago) {
    return this.http.put(this.PAGOS, pago, { responseType: 'text' });
  }

  // ELIMINAR -> regresa texto "Eliminado"
  eliminarPago(idPago: number) {
    return this.http.delete(this.PAGOS + "/" + idPago, { responseType: 'text' });
  }

  // FILTROS
  listarPagosPorPedido(idPedido: number) {
    return this.http.get<Pago[]>(this.PAGOS + "/listarPorPedido/" + idPedido);
  }

  listarPagosPorTienda(tiendaId: number) {
    return this.http.get<Pago[]>(this.PAGOS + "/listarPorTienda/" + tiendaId);
  }


  //tienda


  ListarTiendas() {
    return this.http.get<Tienda[]>(this.urlTienda);
  }

  GuardarTienda(tienda: Tienda) {
    return this.http.post(this.urlTienda, tienda, { responseType: 'text' });
  }

  BuscarTienda(id: number) {
    return this.http.get<Tienda>(`${this.urlTienda}/${id}`);
  }

  EditarTienda(id: number, tienda: Tienda) {
    return this.http.put(`${this.urlTienda}/${id}`, tienda, { responseType: 'text' });
  }

  EliminarTienda(id: number) {
    return this.http.delete(`${this.urlTienda}/${id}`, { responseType: 'text' });
  }

}



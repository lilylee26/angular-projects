import { Routes } from '@angular/router';
import { ListarClientes } from './Componentes/Clientes/listar-clientes/listar-clientes';
import { Component } from '@angular/core';
import { GuardarClientes } from './Componentes/Clientes/guardar-clientes/guardar-clientes';
import { EditarClientes } from './Componentes/Clientes/editar-clientes/editar-clientes';
import { ListarPedidos } from './Componentes/Pedidos/listar-pedidos/listar-pedidos';
import { GuardarPedidos } from './Componentes/Pedidos/guardar-pedidos/guardar-pedidos';
import { EditarPedidos } from './Componentes/Pedidos/editar-pedidos/editar-pedidos';
import { ListarProductos } from './Componentes/Productos/listar-productos/listar-productos';
import { GuardarProductos } from './Componentes/Productos/guardar-productos/guardar-productos';
import { EditarProductos } from './Componentes/Productos/editar-productos/editar-productos';
import { ListarDetallePedido } from './Componentes/DetallePedido/listar-detalle-pedido/listar-detalle-pedido';
import { GuardarDetallePedido } from './Componentes/DetallePedido/guardar-detalle-pedido/guardar-detalle-pedido';
import { EditarDetallePedido } from './Componentes/DetallePedido/editar-detalle-pedido/editar-detalle-pedido';
import { ListarPagos } from './Componentes/Pagos/listar-pagos/listar-pagos';
import { GuardarPagos } from './Componentes/Pagos/guardar-pagos/guardar-pagos';
import { EditarPagos } from './Componentes/Pagos/editar-pagos/editar-pagos';
import { GuardarTienda } from './Componentes/Tienda/guardar-tienda/guardar-tienda';
import { ListarTienda } from './Componentes/Tienda/listar-tienda/listar-tienda';
import { EditarTienda } from './Componentes/Tienda/editar-tienda/editar-tienda';


export const routes: Routes = [
  { path: 'listarCliente', component: ListarClientes },
  //creo un path de nombre "name" y lo asocia a un "componente name"
  //significa que si yo uso el nombre del path me redireccionara al componente asociado, como url
  { path: 'guardarCliente', component: GuardarClientes },
  { path: 'editarCliente/:id', component: EditarClientes },


  //path para navegar a los componentes de pedidos
  { path: 'listarPedido', component: ListarPedidos },
  { path: 'guardarPedido', component: GuardarPedidos },
  { path: 'editarPedido/:id', component: EditarPedidos },

  //path para navegar a los componentes de producto
  { path: 'listarProducto', component: ListarProductos },
  { path: 'guardarProducto', component: GuardarProductos },
  { path: 'editarProducto/:id', component: EditarProductos },

  //path para navegar a los componentes de detallepedido
  { path: 'listarDetallePedido', component: ListarDetallePedido },
  { path: 'guardarDetallePedido', component: GuardarDetallePedido },
  { path: 'editarDetallePedido/:id', component: EditarDetallePedido },

  //path para navegar a los componentes de pagos
  { path: 'listarPagos', component: ListarPagos },
  { path: 'guardarPago', component: GuardarPagos },
  { path: 'editarPago/:id', component: EditarPagos },

  //tienda
   { path: 'listarTienda', component: ListarTienda },
  { path: 'guardarTienda', component: GuardarTienda },
  { path: 'editarTienda/:id', component: EditarTienda },

  { path: '', redirectTo: 'listarTienda', pathMatch: 'full' }
];

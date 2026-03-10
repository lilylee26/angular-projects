export class Pedido {
  idPedido!: number;
  clienteId!: number;
  fechaPedido!: string;  // yyyy-MM-dd
  total!: number;
  estado!: string;
  tiendaId!: number;
}

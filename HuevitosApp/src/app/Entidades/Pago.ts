export class Pago {
  idPago!: number;
  idPedido!: number;
  tiendaId!: number;
  metodo!: string;
  fechaPago!: string;   // recomendado: yyyy-MM-ddTHH:mm:ss
  monto!: number;
  estado!: string;      // PENDIENTE | PAGADO | CANCELADO
}

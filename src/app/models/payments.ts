export interface PaymentI {
  id_pago?: number; // opcional, se asigna automáticamente
  clientName: string; // nombre del cliente
  typeSuscripcion: 'Mensual' | 'Trimestral' | 'Anual'; // tipo de suscripción
  metodo_pago: 'Efectivo' | 'Tarjeta' | 'App'; // método de pago
  fecha_pago: string; // fecha del pago (ISO string o 'YYYY-MM-DD')
  monto: number; // monto a pagar
}

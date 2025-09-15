export interface TicketII {
  id?: number; // ID de la liquidación
  ticketId: number; // ID del ticket que se va a cancelar
  rate: number; // Tarifa del ticket
  ticketTime: string; // Hora en que se realizó el ticket
  vehicleType: 'Carro' | 'Moto' | 'Bici'; // Tipo de vehículo (en español)
  VehiclePlate: string; // Placa del vehículo
  paymentTime?: string; // Hora en que se pagó
  status: 'Pago' | 'Pendiente'; // Estado del ticket
  amount: number;
}
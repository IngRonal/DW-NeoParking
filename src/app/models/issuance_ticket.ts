export interface TicketI {
  id?: number;
  clientId?: number;                  // ID del cliente si es particular o suscripción
  vehicleId?: number;                 // ID del vehículo
  clientName?: string;                // Nombre del cliente (para particular)
  clientDocument?: string;            // Documento del cliente (para particular)
  subscriptionType?: 'Mensual' | 'Trimestral' | 'Anual' | 'Hora';                  
  date: string;                        // Fecha de emisión del ticket
  status: 'Pagado' | 'Pendiente';
  timeIn?: string;                    // Hora de entrada (para tickets por hora)

  // Datos relacionados con otras tablas
  plazaName?: string;                  // Nombre de la plaza
  parkingName?: string;                // Nombre del parking
  vehicleType?: 'Carro' | 'Moto' | 'Bici'; // Tipo de vehículo
  rate?: number;
  vehiclePlate?: string;                       // Placa del vehículo
}
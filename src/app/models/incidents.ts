export interface IncidentsI {
  id_incidencia?: number; // Opcional, se asigna automáticamente
  id_ticket?: number;     // FK opcional, si la incidencia es por ticket
  id_plaza?: number;      // FK opcional, si la incidencia es por plaza
  descripcion: string;    // Descripción de la incidencia
  fecha: string;          // Fecha de la incidencia (ISO string o 'YYYY-MM-DD')
  estado: 'pendiente' | 'resuelto'; // Estado de la incidencia
}

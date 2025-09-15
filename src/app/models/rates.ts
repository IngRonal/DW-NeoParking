export interface RateI {
  id?: number; 
  timeRange: 'Diurna' | 'Nocturna' | 'Hora' | 'Día' | 'Fin de semana'; 
  pricePerHour: number;
  pricePerDay: number;
}
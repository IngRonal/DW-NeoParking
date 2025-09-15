export interface SubscriptionI {
  id?: number;           
  clientId: number;      
  type: 'Mensual' | 'Trimestral' | 'Anual'; 
  startDate: string;     
  endDate: string;       
  status: 'Activa' | 'Vencida';
  vehicleIds?: number[];
  price: number; // 💰 Nuevo campo
}
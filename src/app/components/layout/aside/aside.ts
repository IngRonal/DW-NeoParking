import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { PanelMenu } from 'primeng/panelmenu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [PanelMenu],
  templateUrl: './aside.html',
  styleUrl: './aside.css'
})
export class Aside implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Sitios',
        icon: 'pi pi-map-marker',
        items: [
          {
            label: 'Plazas',
            icon: 'pi pi-building',
            items: [
              {
                label: 'Nueva plaza',
                icon: 'pi pi-plus',
                routerLink: '/squares/create'
              },
              {
                label: 'Ver plazas',
                icon: 'pi pi-eye',
                routerLink: '/squares'
              },
              {
                label: 'Modificar plaza',
                icon: 'pi pi-pencil',
                routerLink: '/squares/update/:id'
              }
            ]
          },
          {
            label: 'Parqueaderos',
            icon: 'fas fa-parking',
            items: [
              {
                label: 'Nuevo parqueadero',
                icon: 'pi pi-plus',
                routerLink: '/parking/create'
              },
              {
                label: 'Ver parqueaderos',
                icon: 'pi pi-eye',
                routerLink: '/parking'
              },
              {
                label: 'Modificar parqueadero',
                icon: 'pi pi-pencil',
                routerLink: '/parking/update/:id'
              }
            ]
          },
          {
            label: 'Tarifas',
            icon: 'pi pi-dollar',
            items: [
              {
                label: 'Nueva tarifa',
                icon: 'pi pi-plus',
                routerLink: '/rates/create'
              },
              {
                label: 'Ver tarifas',
                icon: 'pi pi-eye',
                routerLink: '/rates'
              },
              {
                label: 'Modificar tarifa',
                icon: 'pi pi-pencil',
                routerLink: '/rates/update/:id'
              }
            ]
          }
        ]
      },
      {
        label: 'Usuarios',
        icon: 'pi pi-user',
        items: [
          {
            label: 'Clientes',
            icon: 'pi pi-users',
            items: [
              {
                label: 'Nuevo cliente',
                icon: 'pi pi-plus',
                routerLink: '/client/create'
              },
              {
                label: 'Ver clientes',
                icon: 'pi pi-eye',
                routerLink: '/client'
              },
              {
                label: 'Modificar cliente',
                icon: 'pi pi-pencil',
                routerLink: '/client/update/:id'
              }
            ]
          },
          {
            label: 'Vehiculos',
            icon: 'fas fa-car-side',
            items: [
              {
                label: 'Nuevo vehiculo',
                icon: 'pi pi-plus',
                routerLink: '/vehicle/create'
              },
              {
                label: 'Ver vehiculos',
                icon: 'pi pi-eye',
                routerLink: '/vehicle'
              },
              {
                label: 'Modificar vehiculo',
                icon: 'pi pi-pencil',
                routerLink: '/vehicle/update/:id'
              }
            ]
          },
          {
            label: 'Suscripciones',
            icon: 'pi pi-credit-card',
            items: [
              {
                label: 'Nueva suscripcion',
                icon: 'pi pi-plus',
                routerLink: '/subscription/create'
              },
              {
                label: 'Ver suscripciones',
                icon: 'pi pi-eye',
                routerLink: '/subscription'
              },
              {
                label: 'Modificar suscripcion',
                icon: 'pi pi-pencil',
                routerLink: '/subscription/update/:id'
              }
            ]
          },
          {
            label: 'Abonos',
            icon: 'pi pi-wallet',
            items: [
              {
                label: 'Nuevo abono',
                icon: 'pi pi-plus',
                routerLink: '/payments/create'
              },
              {
                label: 'Ver abonos',
                icon: 'pi pi-eye',
                routerLink: '/payments'
              },
              {
                label: 'Modificar abono',
                icon: 'pi pi-pencil',
                routerLink: '/payments/update/:id'
              }
            ]
          }
        ]
      },
      {
        label: 'Tickets',
        icon: 'pi pi-ticket',
        items: [
          {
            label: 'Emision de Tickets',
            icon: 'pi pi-file-o',
            items: [
              {
                label: 'Nuevo ticket',
                icon: 'pi pi-plus',
                routerLink: '/ticket-issuance/create'
              },
              {
                label: 'Ver tickets',
                icon: 'pi pi-eye',
                routerLink: '/ticket-issuance'
              },
              {
                label: 'Modificar ticket',
                icon: 'pi pi-pencil',
                routerLink: '/ticket-issuance/update/:id'
              }
            ]
          },
          {
            label: 'Liquidacion de Tickets',
            icon: 'pi pi-calculator',
            items: [
              {
                label: 'Nueva  liquidacion',
                icon: 'pi pi-plus',
                routerLink: '/ticket-liquidation/create'
              },
              {
                label: 'Ver liquidaciones',
                icon: 'pi pi-eye',
                routerLink: '/ticket-liquidation'
              },
              {
                label: 'Modificar liquidacion',
                icon: 'pi pi-pencil',
                routerLink: '/ticket-liquidation/update/:id'
              }
            ]
          },
          {
            label: 'Accesos',
            icon: 'pi pi-sign-in',
            items: [
              {
                label: 'Nuevo acceso',
                icon: 'pi pi-plus',
                routerLink: '/access/create'
              },
              {
                label: 'Ver accesos',
                icon: 'pi pi-eye',
                routerLink: '/access'
              },
              {
                label: 'Modificar acceso',
                icon: 'pi pi-pencil',
                routerLink: '/access/update/:id'
              }
            ]
          }
        ]
      },
      {
        label: 'Pagos',
        icon: 'pi pi-wallet',
        items: [
          {
            label: 'Nuevo pago',
            icon: 'pi pi-plus',
            routerLink: '/payments/create'
          },
          {
            label: 'Ver pagos',
            icon: 'pi pi-eye',
            routerLink: '/payments'
          },
          {
            label: 'Modificar pago',
            icon: 'pi pi-pencil',
            routerLink: '/payments/update/:id'
          },
          {
            label: 'Reportes de pagos',
            icon: 'pi pi-file',
            routerLink: '/income-reports'
          }
        ]
      },
      {
        label: 'Incidentes',
        icon: 'pi pi-exclamation-triangle',
        items: [
          {
            label: 'Nuevo incidente',
            icon: 'pi pi-plus',
            routerLink: '/incidents/create'
          },
          {
            label: 'Ver incidentes',
            icon: 'pi pi-eye',
            routerLink: '/incidents'
          },
          {
            label: 'Modificar incidente',
            icon: 'pi pi-pencil',
            routerLink: '/incidents/update/:id'
          }
        ]
      },
      {
        label: 'Resumen y Reportes',
        icon: 'pi pi-cog',
      }
    ];
  }
}

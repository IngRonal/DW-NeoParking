import { Routes } from '@angular/router';
import { GetAllsquares } from './components/squares/get-allsquares/get-allsquares';
import { Createsquares } from './components/squares/createsquares/createsquares';
import { Updatesquares } from './components/squares/updatesquares/updatesquares';

import { GetAllparking } from './components/parking/get-allparking/get-allparking';
import { Createparking } from './components/parking/createparking/createparking';
import { Updateparking } from './components/parking/updateparking/updateparking';

import { Createrates } from './components/rates/createrates/createrates';
import { GetAllrates } from './components/rates/get-allrates/get-allrates';
import { Updaterates } from './components/rates/updaterates/updaterates';

import { CreateClient } from './components/client/create-client/create-client';
import { GetAllClient } from './components/client/get-all-client/get-all-client';
import { UpdateClient } from './components/client/update-client/update-client';

import { Createvehicle } from './components/vehicle/createvehicle/createvehicle';
import { GetAllvehicle } from './components/vehicle/get-allvehicle/get-allvehicle';
import { Updatevehicle } from './components/vehicle/updatevehicle/updatevehicle';

import { Createsubscription } from './components/subscription/createsubscription/createsubscription';
import { GetAllsubscription } from './components/subscription/get-allsubscription/get-allsubscription';
import { Updatesubscription } from './components/subscription/updatesubscription/updatesubscription';

import { Createdeposit } from './components/deposit/createdeposit/createdeposit';
import { GetAlldeposit } from './components/deposit/get-alldeposit/get-alldeposit';
import { Updatedeposit } from './components/deposit/updatedeposit/updatedeposit';

import { CreatesubticketIssuance } from './components/ticket_issuance/createsubticket-issuance/createsubticket-issuance';
import { GetAllticketIssuance } from './components/ticket_issuance/get-allticket-issuance/get-allticket-issuance';
import { UpdateticketIssuance } from './components/ticket_issuance/updateticket-issuance/updateticket-issuance';

import { CreateticketLiquidation } from './components/ticket_liquidation/createticket-liquidation/createticket-liquidation';
import { GetAllticketLiquidation } from './components/ticket_liquidation/get-allticket-liquidation/get-allticket-liquidation';
import { UpdateticketLiquidation } from './components/ticket_liquidation/updateticket-liquidation/updateticket-liquidation';

import { Createaccess } from './components/access/createaccess/createaccess';
import { GetAllaccess } from './components/access/get-allaccess/get-allaccess';
import { Updateaccess } from './components/access/updateaccess/updateaccess';

import { Createpayments } from './components/payments/createpayments/createpayments';
import { GetAllpayments } from './components/payments/get-allpayments/get-allpayments';
import { Updatepayments } from './components/payments/updatepayments/updatepayments';

import { CreateincomeReports } from './components/income_reports/createincome-reports/createincome-reports';
import { GetAllincomeReports } from './components/income_reports/get-allincome-reports/get-allincome-reports';
import { UpdateincomeReports } from './components/income_reports/updateincome-reports/updateincome-reports';

import { Createincidents } from './components/incidents/createincidents/createincidents';
import { GetAllincidents } from './components/incidents/get-allincidents/get-allincidents';
import { Updateincidents } from './components/incidents/updateincidents/updateincidents';




export const routes: Routes = [
        { 
        path: '', 
        redirectTo: '/', 
        pathMatch: 'full' 
    },
    // Rutas de plazas
    {
        path: "squares",
        component: GetAllsquares
    },
    {
        path: "squares/create",
        component: Createsquares
    },
    {
        path: "squares/update/:id",
        component: Updatesquares 
    },

    // Ruta de tarifas
    {
        path: "rates",
        component: GetAllrates
    },
    {
        path: "rates/create",
        component: Createrates
    },
    {
        path: "rates/update/:id",
        component: Updaterates
    },

    // Ruta de paqueaderos
    {
        path: "parking",
        component: GetAllparking
    },
    {
        path: "parking/create",
        component: Createparking
    },
    {
        path: "parking/update/:id",
        component: Updateparking
    },

    // Ruta de Usuarios
    {
        path: "client",
        component: GetAllClient
    },
    {
        path: "client/create",
        component: CreateClient
    },
    {
        path: "client/update/:id",
        component: UpdateClient
    },

    // Ruta de Vehiculos
    {
        path: "vehicle",
        component: GetAllvehicle
    },
    {
        path: "vehicle/create",
        component: Createvehicle
    },
    {
        path: "vehicle/update/:id",
        component: Updatevehicle
    },

    // Ruta de Suscripciones
    {
        path: "subscription",
        component: GetAllsubscription
    },
    {
        path: "subscription/create",
        component: Createsubscription
    },
    {
        path: "subscription/update/:id",
        component: Updatesubscription
    },

    // Ruta de Abonos
    {
        path: "deposit",
        component: GetAlldeposit
    },
    {
        path: "deposit/create",
        component: Createdeposit
    },
    {
        path: "deposit/update/:id",
        component: Updatedeposit
    },

    // Ruta de Emision de Tickets
    {
        path: "ticket-issuance",
        component: GetAllticketIssuance
    },
    {
        path: "ticket-issuance/create",
        component: CreatesubticketIssuance
    },
    {
        path: "ticket-issuance/update/:id",
        component: UpdateticketIssuance
    },

    // Ruta de Liquidacion de Tickets
    {
        path: "ticket-liquidation",
        component: GetAllticketLiquidation
    },
    {
        path: "ticket-liquidation/create",
        component: CreateticketLiquidation
    },
    {
        path: "ticket-liquidation/update/:id",
        component: UpdateticketLiquidation
    },

    // Ruta de Accesos
    {
        path: "access",
        component: GetAllaccess
    },
    {
        path: "access/create",
        component: Createaccess
    },
    {
        path: "access/update/:id",
        component: Updateaccess
    },

    // Ruta de Pagos
    {
        path: "payments",
        component: GetAllpayments
    },
    {
        path: "payments/create",
        component: Createpayments
    },
    {
        path: "payments/update/:id",
        component: Updatepayments
    },

    // Ruta de Reportes de Ingresos
    {
        path: "income-reports",
        component: GetAllincomeReports
    },

    // Ruta de Incidentes
    {
        path: "incidents",
        component: GetAllincidents
    },
    {
        path: "incidents/create",
        component: Createincidents
    },
    {
        path: "incidents/update/:id",
        component: Updateincidents
    }
];

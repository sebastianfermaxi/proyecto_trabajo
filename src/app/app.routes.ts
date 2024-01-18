import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { RecepcionComponent } from './components/recepcion/recepcion.component';
import { TableComponent } from './components/table/table.component';

export const routes: Routes = [
    
    {
        path : '', component : InicioComponent
    },
    {
        path: 'reg_user', component : RecepcionComponent
    },
    {
        path: 'inicio', component : InicioComponent
    },
    {
        path: 'services', component : TableComponent
    }
];

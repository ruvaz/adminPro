import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ProgressComponent} from './pages/progress/progress.component';
import {Graficas1Component} from './pages/graficas1/graficas1.component';
import {PagesComponent} from './pages/pages.component';

import {NopagefoundComponent} from './shared/nopagefound/nopagefound.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './login/register.component';

const appRoutes: Routes = [
  // Cualquier otra ruta no definica aqui, muestre  pagenotfound,
  {path: '**', component: NopagefoundComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  // { // hijos route ahora se importan desde el pages.module.ts
  //   path: '', component: PagesComponent,
  //   children: [
  //     // {path: 'dashboard', component: DashboardComponent},
  //     // {path: 'progress', component: ProgressComponent },
  //     // {path: 'graficas1', component: Graficas1Component},
  //     // {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  //   ]
  // },

  //{path: '', redirectTo: '/dashboard', pathMatch: 'full'}, // redirect de root a algun url


];


export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true } );

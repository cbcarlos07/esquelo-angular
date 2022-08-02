import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'dashboard', 
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'dashboard2', 
    loadChildren: () => import('./pages/dashboard2/dashboard2.module').then(m => m.Dashboard2Module)
  },
  {
    path: 'lista', 
    loadChildren: () => import('./pages/lista/lista.module').then(m => m.ListaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

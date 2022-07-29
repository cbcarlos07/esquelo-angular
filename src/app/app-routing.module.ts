import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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

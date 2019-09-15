import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientsComponent } from './clients/clients.component';
import { NotetakerComponent } from './notetaker/notetaker.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "clients",
    component: ClientsComponent
  },
  {
    path: "notetaker",
    component: NotetakerComponent
  },
  {
    path: "portfolio",
    component: PortfolioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
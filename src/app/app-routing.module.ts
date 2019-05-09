import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminSigninComponent } from './admin/admin-signin/admin-signin.component';
import { AdminDashbordComponent } from './admin/admin-dashbord/admin-dashbord.component';

const routes: Routes = [
  { path: 'admin/login', component: AdminSigninComponent},
  { path: 'admin/dashbord', component: AdminDashbordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

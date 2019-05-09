import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminSigninComponent } from './admin/admin-signin/admin-signin.component';
import { AdminDashbordComponent } from './admin/admin-dashbord/admin-dashbord.component';
import { AdminPropertiesComponent } from './admin/admin-properties/admin-properties.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminSigninComponent,
    AdminDashbordComponent,
    AdminPropertiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { RegisterAdminComponent } from './admin/register-admin/register-admin.component';
import { ListNutritionPlanUserComponent } from './user/list-nutrition-plan-user/list-nutrition-plan-user.component';

import { AuthService } from "./services/auth.service";
import { TokenInterceptorService } from "./services/token-interceptor.service";
import { AuthGuard } from "./guard/auth.guard";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home/home.component';
import { FooterComponent } from './home/footer/footer.component';
import { ListDepartmentsComponent } from './admin/list-departments/list-departments.component';
import { RegisterDepartmentComponent } from './admin/register-department/register-department.component';
import { UpdateDepartmentComponent } from './admin/update-department/update-department.component';
import { ListCitiesComponent } from './admin/list-cities/list-cities.component';
import { RegisterCityComponent } from './admin/register-city/register-city.component';
import { UpdateCityComponent } from './admin/update-city/update-city.component';
import { ListLocationsComponent } from './admin/list-locations/list-locations.component';
import { RegisterLocationComponent } from './admin/register-location/register-location.component';
import { UpdateLocationComponent } from './admin/update-location/update-location.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    RegisterAdminComponent,
    ListNutritionPlanUserComponent,
    HomeComponent,
    FooterComponent,
    ListDepartmentsComponent,
    RegisterDepartmentComponent,
    UpdateDepartmentComponent,
    ListCitiesComponent,
    RegisterCityComponent,
    UpdateCityComponent,
    ListLocationsComponent,
    RegisterLocationComponent,
    UpdateLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuard,TokenInterceptorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

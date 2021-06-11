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
import { DocumentTypeService } from "./services/document-type.service";
import { UserLocationService } from "./services/user-location.service";
import { WeekRoutinesService } from "./services/week-routines.service";

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
import { RegisterDocumentTypeComponent } from './admin/register-document-type/register-document-type.component';
import { ListDocumentTypeComponent } from './admin/list-document-type/list-document-type.component';
import { ListUserLocationComponent } from './admin/list-user-location/list-user-location.component';
import { RegisterWeekRoutinesComponent } from './trainer/register-week-routines/register-week-routines.component';
import { ListWeekRoutinesComponent } from './trainer/list-week-routines/list-week-routines.component';
import { RegisterUserLocationComponent } from './user/register-user-location/register-user-location.component';
import { ListDepartmentsComponent } from './admin/list-departments/list-departments.component';
import { RegisterDepartmentComponent } from './admin/register-department/register-department.component';
import { UpdateDepartmentComponent } from './admin/update-department/update-department.component';
import { ListCitiesComponent } from './admin/list-cities/list-cities.component';
import { RegisterCityComponent } from './admin/register-city/register-city.component';
import { UpdateCityComponent } from './admin/update-city/update-city.component';
import { ListLocationsComponent } from './admin/list-locations/list-locations.component';
import { RegisterLocationComponent } from './admin/register-location/register-location.component';
import { UpdateLocationComponent } from './admin/update-location/update-location.component';
import { RegisterExeciseComponent } from './trainer/register-execise/register-execise.component';
import { RegisterTypeExeciseComponent } from './trainer/register-type-execise/register-type-execise.component';
import { RegisterTypeMuscleComponent } from './trainer/register-type-muscle/register-type-muscle.component';
import { ListExeciseComponent } from './trainer/list-execise/list-execise.component';
import { ListTypeExeciseComponent } from './trainer/list-type-execise/list-type-execise.component';
import { ListTypeMuscleComponent } from './trainer/list-type-muscle/list-type-muscle.component';
import { UpdateExeciseComponent } from './trainer/update-execise/update-execise.component';
import { UpdateTypeExeciseComponent } from './trainer/update-type-execise/update-type-execise.component';
import { UpdateTypeMuscleComponent } from './trainer/update-type-muscle/update-type-muscle.component';
import { RegisterPlanComponent } from './admin/register-plan/register-plan.component';
import { RegisterRolComponent } from './admin/register-rol/register-rol.component';
import { RegisterStatusPaymentComponent } from './admin/register-status-payment/register-status-payment.component';
import { ListPlanComponent } from './admin/list-plan/list-plan.component';
import { ListRolComponent } from './admin/list-rol/list-rol.component';
import { ListStatusPaymentComponent } from './admin/list-status-payment/list-status-payment.component';
import { UpdatePlanComponent } from './admin/update-plan/update-plan.component';
import { UpdateRolComponent } from './admin/update-rol/update-rol.component';
import { UpdateStatusPaymentComponent } from './admin/update-status-payment/update-status-payment.component';



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
    RegisterDocumentTypeComponent,
    ListDocumentTypeComponent,
    ListUserLocationComponent,
    RegisterWeekRoutinesComponent,
    ListWeekRoutinesComponent,
    RegisterUserLocationComponent,    
    ListDepartmentsComponent,
    RegisterDepartmentComponent,
    UpdateDepartmentComponent,
    ListCitiesComponent,
    RegisterCityComponent,
    UpdateCityComponent,
    ListLocationsComponent,
    RegisterLocationComponent,
    UpdateLocationComponent,
    RegisterExeciseComponent,
    RegisterTypeExeciseComponent,
    RegisterTypeMuscleComponent,
    ListExeciseComponent,
    ListTypeExeciseComponent,
    ListTypeMuscleComponent,
    UpdateExeciseComponent,
    UpdateTypeExeciseComponent,
    UpdateTypeMuscleComponent,
    RegisterPlanComponent,
    RegisterRolComponent,
    RegisterStatusPaymentComponent,
    ListPlanComponent,
    ListRolComponent,
    ListStatusPaymentComponent,
    UpdatePlanComponent,
    UpdateRolComponent,
    UpdateStatusPaymentComponent,

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
  providers: [AuthService, DocumentTypeService, UserLocationService, WeekRoutinesService, AuthGuard, TokenInterceptorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

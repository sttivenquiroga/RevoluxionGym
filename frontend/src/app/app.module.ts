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
    RegisterUserLocationComponent    
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

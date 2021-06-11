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
import { CreateExerciseComponent } from './trainer/create-exercise/create-exercise.component';
import { GetAllExerciseComponent } from './trainer/get-all-exercise/get-all-exercise.component';
import { CreateTypeExerciseComponent } from './trainer/create-type-exercise/create-type-exercise.component';
import { CreateTypeMuscleComponent } from './trainer/create-type-muscle/create-type-muscle.component';
import { GetAllTypeMuscleComponent } from './trainer/get-all-type-muscle/get-all-type-muscle.component';
import { GetAllTypeExerciseComponent } from './trainer/get-all-type-exercise/get-all-type-exercise.component';
import { CreatePlanComponent } from './admin/create-plan/create-plan.component';
import { GetAllPlanComponent } from './admin/get-all-plan/get-all-plan.component';
import { CreateStatusPaymentComponent } from './admin/create-status-payment/create-status-payment.component';
import { GetAllStatusPaymentComponent } from './admin/get-all-status-payment/get-all-status-payment.component';
import { GetAllRolComponent } from './admin/get-all-rol/get-all-rol.component';
import { CreateRolComponent } from './admin/create-rol/create-rol.component';


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
    CreateExerciseComponent,
    GetAllExerciseComponent,
    CreateTypeExerciseComponent,
    CreateTypeMuscleComponent,
    GetAllTypeMuscleComponent,
    GetAllTypeExerciseComponent,
    CreatePlanComponent,
    GetAllPlanComponent,
    CreateStatusPaymentComponent,
    GetAllStatusPaymentComponent,
    GetAllRolComponent,
    CreateRolComponent
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

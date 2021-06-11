import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { RegisterDocumentTypeComponent } from './admin/register-document-type/register-document-type.component';
import { ListDocumentTypeComponent } from './admin/list-document-type/list-document-type.component';
import { ListUserLocationComponent } from './admin/list-user-location/list-user-location.component';
import { RegisterUserLocationComponent } from './user/register-user-location/register-user-location.component';
import { RegisterWeekRoutinesComponent } from './trainer/register-week-routines/register-week-routines.component';
import { ListWeekRoutinesComponent } from './trainer/list-week-routines/list-week-routines.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'registerDocumentType',
    component: RegisterDocumentTypeComponent,
  },
  {
    path: 'listDocumentType',
    component: ListDocumentTypeComponent,
  },
  {
    path: 'listUserLocation',
    component: ListUserLocationComponent,
  },
  {
    path: 'registerUserLocation',
    component: RegisterUserLocationComponent,
  },
  {
    path: 'registerWeekRoutine',
    component: RegisterWeekRoutinesComponent,
  },
  {
    path: 'listWeekRoutine',
    component: ListWeekRoutinesComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

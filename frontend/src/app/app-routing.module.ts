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


import { ListCitiesComponent } from "./admin/list-cities/list-cities.component";
import { ListDepartmentsComponent } from "./admin/list-departments/list-departments.component";
import { ListLocationsComponent } from "./admin/list-locations/list-locations.component";
import { RegisterCityComponent } from "./admin/register-city/register-city.component";
import { RegisterDepartmentComponent } from "./admin/register-department/register-department.component";
import { RegisterLocationComponent } from "./admin/register-location/register-location.component";
import { UpdateCityComponent } from "./admin/update-city/update-city.component";
import { UpdateDepartmentComponent } from "./admin/update-department/update-department.component";
import { UpdateLocationComponent } from "./admin/update-location/update-location.component";

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
  },
  {
    path: 'listCities',
    component: ListCitiesComponent,
  },
  {
    path: 'listDepartments',
    component: ListDepartmentsComponent,
  },
  {
    path: 'listLocations',
    component: ListLocationsComponent,
  },
  {
    path: 'registerCity',
    component: RegisterCityComponent,
  },
  {
    path: 'registerDepartment',
    component: RegisterDepartmentComponent,
  },
  {
    path: 'registerLocation',
    component: RegisterLocationComponent,
  },
  {
    path: 'updateCity',
    component: UpdateCityComponent,
  },
  {
    path: 'updateDepartment',
    component: UpdateDepartmentComponent,
  },
  {
    path: 'updateLocation',
    component: UpdateLocationComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

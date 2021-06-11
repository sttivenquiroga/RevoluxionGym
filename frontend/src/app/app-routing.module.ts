import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';

import { ListCitiesComponent } from "./admin/list-cities/list-cities.component";
import { ListDepartmentsComponent } from "./admin/list-departments/list-departments.component";
import { ListLocationsComponent } from "./admin/list-locations/list-locations.component";
import { RegisterCityComponent } from "./admin/register-city/register-city.component";
import { RegisterDepartmentComponent } from "./admin/register-department/register-department.component";
import { RegisterLocationComponent } from "./admin/register-location/register-location.component";
import { UpdateCityComponent } from "./admin/update-city/update-city.component";
import { UpdateDepartmentComponent } from "./admin/update-department/update-department.component";
import { UpdateLocationComponent } from "./admin/update-location/update-location.component";
import { RegisterAdminComponent } from './admin/register-admin/register-admin.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { UpdateProfileComponent } from './user/update-profile/update-profile.component';
import { UpdateAdminComponent } from './admin/update-admin/update-admin.component';
import { RegisterNutritionPlanComponent } from './trainer/register-nutrition-plan/register-nutrition-plan.component';
import { ListNutritionPlanUserComponent } from './user/list-nutrition-plan-user/list-nutrition-plan-user.component';
import { ListNutritionPlanComponent } from './trainer/list-nutrition-plan/list-nutrition-plan.component';
import { UpdateNutritionPlanComponent } from './trainer/update-nutrition-plan/update-nutrition-plan.component';

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
  {
    path: 'registerAdmin',
    component: RegisterAdminComponent,
  },
  {
    path: 'listUser',
    component: ListUserComponent,
  },
  {
    path: 'updateProfile',
    component: UpdateProfileComponent,
  },
  {
    path: 'updateAdmin',
    component: UpdateAdminComponent,
  },
  {
    path: 'registerNutritionPlan',
    component: RegisterNutritionPlanComponent,
  },
  {
    path: 'listNutritionPlanUser',
    component: ListNutritionPlanUserComponent,
  },
  {
    path: 'listNutritionPlan',
    component: ListNutritionPlanComponent,
  },
  {
    path: 'updateNutritionPlan',
    component: UpdateNutritionPlanComponent,
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

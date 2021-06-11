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

import { ListCitiesComponent } from './admin/list-cities/list-cities.component';
import { ListDepartmentsComponent } from './admin/list-departments/list-departments.component';
import { ListLocationsComponent } from './admin/list-locations/list-locations.component';
import { RegisterCityComponent } from './admin/register-city/register-city.component';
import { RegisterDepartmentComponent } from './admin/register-department/register-department.component';
import { RegisterLocationComponent } from './admin/register-location/register-location.component';
import { UpdateCityComponent } from './admin/update-city/update-city.component';
import { UpdateDepartmentComponent } from './admin/update-department/update-department.component';
import { UpdateLocationComponent } from './admin/update-location/update-location.component';
import { RegisterAdminComponent } from './admin/register-admin/register-admin.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { UpdateProfileComponent } from './user/update-profile/update-profile.component';
import { UpdateAdminComponent } from './admin/update-admin/update-admin.component';
import { RegisterNutritionPlanComponent } from './trainer/register-nutrition-plan/register-nutrition-plan.component';
import { ListNutritionPlanUserComponent } from './user/list-nutrition-plan-user/list-nutrition-plan-user.component';
import { ListNutritionPlanComponent } from './trainer/list-nutrition-plan/list-nutrition-plan.component';
import { UpdateNutritionPlanComponent } from './trainer/update-nutrition-plan/update-nutrition-plan.component';
import { RegisterPlanComponent } from './admin/register-plan/register-plan.component';
import { RegisterRolComponent } from './admin/register-rol/register-rol.component';
import { RegisterStatusPaymentComponent } from './admin/register-status-payment/register-status-payment.component';
import { RegisterExeciseComponent } from './trainer/register-execise/register-execise.component';
import { RegisterTypeExeciseComponent } from './trainer/register-type-execise/register-type-execise.component';
import { RegisterTypeMuscleComponent } from './trainer/register-type-muscle/register-type-muscle.component';
import { ListPlanComponent } from './admin/list-plan/list-plan.component';
import { ListRolComponent } from './admin/list-rol/list-rol.component';
import { ListStatusPaymentComponent } from './admin/list-status-payment/list-status-payment.component';
import { ListExeciseComponent } from './trainer/list-execise/list-execise.component';
import { ListTypeExeciseComponent } from './trainer/list-type-execise/list-type-execise.component';
import { ListTypeMuscleComponent } from './trainer/list-type-muscle/list-type-muscle.component';
import { UpdatePlanComponent } from './admin/update-plan/update-plan.component';
import { UpdateRolComponent } from './admin/update-rol/update-rol.component';
import { UpdateStatusPaymentComponent } from './admin/update-status-payment/update-status-payment.component';
import { UpdateExeciseComponent } from './trainer/update-execise/update-execise.component';
import { UpdateTypeExeciseComponent } from './trainer/update-type-execise/update-type-execise.component';
import { UpdateTypeMuscleComponent } from './trainer/update-type-muscle/update-type-muscle.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
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
  },
  {
    path: 'registerPlan',
    component: RegisterPlanComponent,
  },
  {
    path: 'registerRol',
    component: RegisterRolComponent,
  },
  {
    path: 'registerStatusPayment',
    component: RegisterStatusPaymentComponent,
  },
  {
    path: 'registerExercise',
    component: RegisterExeciseComponent,
  },
  {
    path: 'registerTypeExercise',
    component: RegisterTypeExeciseComponent,
  },
  {
    path: 'registerTypeMuscle',
    component: RegisterTypeMuscleComponent,
  },
  {
    path: 'listPlan',
    component: ListPlanComponent,
  },
  {
    path: 'listRol',
    component: ListRolComponent,
  },
  {
    path: 'listStatusPayment',
    component: ListStatusPaymentComponent,
  },
  {
    path: 'listExercise',
    component: ListExeciseComponent,
  },
  {
    path: 'listTypeExercise',
    component: ListTypeExeciseComponent,
  },
  {
    path: 'listTypeMuscle',
    component: ListTypeMuscleComponent,
  },
  {
    path: 'updatePlan',
    component: UpdatePlanComponent,
  },
  {
    path: 'updateRol',
    component: UpdateRolComponent,
  },
  {
    path: 'updateStatusPayment',
    component: UpdateStatusPaymentComponent,
  },
  {
    path: 'updateExercise',
    component: UpdateExeciseComponent,
  },
  {
    path: 'updateTypeExercise',
    component: UpdateTypeExeciseComponent,
  },
  {
    path: 'updateTypeMuscle',
    component: UpdateTypeMuscleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

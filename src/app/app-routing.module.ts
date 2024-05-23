import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAdminMapComponent } from './components/modules/view-admin-map/view-admin-map.component';
import { ViewUserMapComponent } from './components/modules/view-user-map/view-user-map.component';
import { RegisterComponent } from './components/modules/register/register.component';
import { LoginComponent } from './components/modules/login/login.component';
import { HatoUserComponent } from './components/hato-user/hato-user.component';
import { FincasUserComponent } from './components/fincas-user/fincas-user.component';
import { FincasAdminComponent } from './components/fincas-admin/fincas-admin.component';
import { PredictionComponent } from './components/prediction/prediction.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path: 'admin', component: ViewAdminMapComponent},
  {path: 'user', component: ViewUserMapComponent},
  {path: 'registro', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user/hato', component: HatoUserComponent},
  {path: 'user/fincas', component: FincasUserComponent},
  {path: 'admin/fincas', component: FincasAdminComponent},
  {path: 'admin/Prediccion', component: PredictionComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



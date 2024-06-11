import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommerceCarComponent } from './commerce-car/commerce-car.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AgancyComponent } from './agancy/agancy.component';
import { StationComponent } from './station/station.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  {path:"commerceCar" , component:CommerceCarComponent},
  { path: "about", component: AboutComponent },
  { path: "contact-us", component: ContactUsComponent },
  { path: "agancy", component: AgancyComponent },
  { path: "station", component: StationComponent },
  { path: "login", component: LoginComponent },
  {path:"register" , component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

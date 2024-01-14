import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MedicinePageComponent } from './medicine-page/medicine-page.component';
import { DoctorPageComponent } from './doctor-page/doctor-page.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SupportPageComponent } from './support-page/support-page.component';

export const routes: Routes = [
  // Add your existing routes here
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'support', component: SupportPageComponent },
  { path: 'medicines', component: MedicinePageComponent },
  { path: 'doctors', component: DoctorPageComponent },
  { path: 'cart', component: CartComponent },
  { path: 'payment', component: PaymentPageComponent },
  { path: 'signup', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

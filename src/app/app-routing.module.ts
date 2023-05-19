import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';
import { SearchBicycleComponent } from './views/search-bicycle/search-bicycle.component';
import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';
import { ProfileComponent } from './views/profile/profile.component';
import { ProductPurchaseComponent } from './views/product-purchase/product-purchase.component';
import { AddBicycleComponent } from './views/add-bicycle/add-bicycle.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'search', component: SearchBicycleComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'product-purchase', component: ProductPurchaseComponent },
  { path: 'create', component: AddBicycleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

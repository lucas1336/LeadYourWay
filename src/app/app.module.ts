import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/home/header/header.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { AboutComponent } from './components/home/about/about.component';
import { TeamComponent } from './components/home/team/team.component';
import { ContactComponent } from './components/home/contact/contact.component';
import { ProfileInfoComponent } from './components/profile/profile-info/profile-info.component';
import { PaymentMethodsComponent } from './components/profile/payment-methods/payment-methods.component';
import { BicycleListComponent } from './components/profile/bicycle-list/bicycle-list.component';
import { HomeComponent } from './views/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { NgTemplateOutlet } from '@angular/common';
import { BicycleTypesComponent } from './components/home/bicycle-types/bicycle-types.component';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';
import { SearchBicycleComponent } from './views/search-bicycle/search-bicycle.component';
import { CardBicyleComponent } from './components/card-bicyle/card-bicyle.component';
import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';
import { ProfileComponent } from './views/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { ProductPurchaseComponent } from './views/product-purchase/product-purchase.component';
import { AddBicycleComponent } from './views/add-bicycle/add-bicycle.component';
import { PaymenthMethodComponent } from './views/paymenth-method/paymenth-method.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { BicycleDetailComponent } from './views/bicycle-detail/bicycle-detail.component';
import { EditInfoComponent } from './components/profile/edit-info/edit-info.component';
import { LoggedInHeaderComponent } from './components/home/logged-in-header/logged-in-header.component';
import { DialogBoxComponent } from './components/toasts/dialog-box/dialog-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    TeamComponent,
    ContactComponent,
    HomeComponent,
    BicycleTypesComponent,
    LoginComponent,
    SignupComponent,
    SearchBicycleComponent,
    CardBicyleComponent,
    ForgotPasswordComponent,
    ProfileComponent,
    UserHeaderComponent,
    ProductPurchaseComponent,
    ProfileInfoComponent,
    PaymentMethodsComponent,
    BicycleListComponent,
    AddBicycleComponent,
    PaymenthMethodComponent,
    NotFoundComponent,
    BicycleDetailComponent,
    EditInfoComponent,
    LoggedInHeaderComponent,
    DialogBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgbDatepicker,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

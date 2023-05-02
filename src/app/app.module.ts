import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/home/header/header.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { AboutComponent } from './components/home/about/about.component';
import { TeamComponent } from './components/home/team/team.component';
import { ContactComponent } from './components/home/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BicycleTypesComponent } from './components/home/bicycle-types/bicycle-types.component';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';
import { SearchBicycleComponent } from './views/search-bicycle/search-bicycle.component';
import { CardBicyleComponent } from './components/card-bicyle/card-bicyle.component';
import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';
import { ProfileComponent } from './views/profile/profile.component';
import { CardsBicycleService } from './service/cards-bicycle.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [CardsBicycleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
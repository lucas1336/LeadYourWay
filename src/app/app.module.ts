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
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

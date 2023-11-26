import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { HousingLocationComponent } from './Components/housing-location/housing-location.component';
import { DetailsComponent } from './Components/details/details.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HousingLocationComponent, DetailsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

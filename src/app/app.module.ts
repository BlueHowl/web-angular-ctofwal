import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityMapComponent } from '../lib/map/map.component';
import { ZoneItemComponent } from '../lib/zone-item/zone-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CityMapComponent,
    ZoneItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

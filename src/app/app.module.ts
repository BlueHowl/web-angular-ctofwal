import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityMapComponent } from '../lib/map/map.component';
import { ZoneItemComponent } from '../lib/zone-item/zone-item.component';
import { FieldsetModule } from 'primeng/fieldset';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { CheckboxModule } from 'primeng/checkbox';
import { UserPinItemComponent } from '../lib/user-pin-item/user-pin-item.component';
import { SplashScreenComponent } from '../lib/splash-screen/splash-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    CityMapComponent,
    ZoneItemComponent,
    UserPinItemComponent,
    SplashScreenComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FieldsetModule,
    DialogModule,
    ButtonModule,
    AvatarModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

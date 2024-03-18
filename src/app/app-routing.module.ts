import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../lib/profile/profile/profile.component';
import { HomeComponent } from '../lib/home/home/home.component';
import { SplashScreenComponent } from '../lib/splash-screen/splash-screen.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: SplashScreenComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  //{ path: '**', redirectTo: '/home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

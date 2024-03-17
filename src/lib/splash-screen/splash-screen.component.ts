import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.css'
})
export class SplashScreenComponent {

  constructor(private router: Router){}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 2200);
  }
}

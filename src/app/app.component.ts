import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TASTY FOOD COMPANY';

  showHeader: boolean = true;
  constructor(private r: Router) {
    r.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showHeader = event.url !== '/login';
      }
    });
  }
  isLoginPage(): boolean {
    return this.r.url === '/login';
  }
}

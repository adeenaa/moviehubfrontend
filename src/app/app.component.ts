import { Component } from '@angular/core';
import {Router,NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MovieHubFrontend';
  showNavbar: boolean = true;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      if(event.url==='/'  || event.url === '/register'){
        this.showNavbar = false;
      }
      else{
        this.showNavbar =true
      }

      
    });
  }


 
}

import { Component } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-nav',
  standalone: false,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  displayNav:boolean=true
  constructor(private router:Router,private route:ActivatedRoute){
    this.route.url.subscribe((url)=>{
      this.displayNav = !['register',''].includes(url[0]?.path);
    })
  }

  signout(){
    if("token" in localStorage){
      localStorage.removeItem("token")
      this.router.navigateByUrl("")
    }
  }
}

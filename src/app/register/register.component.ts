import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import { MovieService } from '../service/movie.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private service:MovieService,private router:Router){

  }
  regForm=new FormGroup({
    "username":new FormControl("",Validators.required),
    "email":new FormControl("",Validators.required),
    "password":new FormControl("",Validators.required)
  })
  signUp(){
  if(this.regForm.valid){
    let formData=this.regForm.value
    this.service.register(formData).subscribe(res=>this.router.navigateByUrl(""))
    
  }
  else{
    alert("invalid")
  }
}

}

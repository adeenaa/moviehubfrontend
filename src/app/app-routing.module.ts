import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MovielistComponent } from './movielist/movielist.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';

const routes: Routes = [
  {path:"register",component:RegisterComponent},
  {path:"",component:LoginComponent},
  {path:"movies",component:MovielistComponent},
  {path:"movies/:id",component:MoviedetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

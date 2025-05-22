import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { MovieService } from '../service/movie.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-moviedetails',
  standalone: false,
  templateUrl: './moviedetails.component.html',
  styleUrl: './moviedetails.component.css'
})
export class MoviedetailsComponent {
id:any
movie:any

reviewForm=new FormGroup({
  "comment":new FormControl("",Validators.required),
  "rating":new FormControl("",Validators.required)
})
  constructor(private route:ActivatedRoute, private service:MovieService){
    this.id=this.route.snapshot.params["id"]
    this.fetchmoviedetails()
  }
  fetchmoviedetails(){
    this.service.moviedetails(this.id).subscribe(res=>this.movie=res)
  }

  addreview(){
    let formData=this.reviewForm.value
    this.service.postreview(this.id,formData).subscribe(res=>this.fetchmoviedetails())
  }
}

import { Component } from '@angular/core';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movielist',
  standalone: false,
  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.css'
})
export class MovielistComponent {
  movies:any
  genres:any
  constructor(private service:MovieService){
    this.service.listmovies().subscribe(res=>this.movies=res)
    this.service.getallgenres().subscribe(res=>this.genres=res)

  }
getMoviesByGenres(genre_name:any){
  this.service.filterMovies(genre_name).subscribe(res=>this.movies=res)
}

}

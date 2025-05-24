import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { 
    
  }

  register(data:any){
    return this.http.post('http://127.0.0.1:8000/api/register/',data)
  }

  authenticate(data:any){
    return this.http.post('http://127.0.0.1:8000/api/token/',data)
  }
  listmovies(){
    let headers=new HttpHeaders({
      "Content-type":"application/json",
      "Authorization":localStorage.getItem("token")??""
  
  })
  return this.http.get("http://127.0.0.1:8000/api/movies/",{"headers":headers})

}
  moviedetails(id:any){
    let header=new HttpHeaders({
      "Content-type":"application/json",
      "Authorization":localStorage.getItem("token")??""
    })
    return this.http.get(`http://127.0.0.1:8000/api/movies/${id}/`,{"headers":header})

  }
  postreview(id:any,data:any){
    let header=new HttpHeaders({
      "Content-type":"application/json",
      "Authorization":localStorage.getItem("token")??""
    })
    return this.http.post(`http://127.0.0.1:8000/api/movies/${id}/add_review/`,data,{"headers":header})
  }
  getallgenres(){
    let header=new HttpHeaders({
      "Content-type":"application/json",
      "Authorization":localStorage.getItem("token")??""

  })
  return this.http.get('http://127.0.0.1:8000/api/movies/genres/',{"headers":header})

}

filterMovies(genre:any){
  let header=new HttpHeaders({
    "Content-type":"application/json",
    "Authorization":localStorage.getItem("token")??""
  })
  
  return this.http.get(`http://127.0.0.1:8000/api/movies/?genre=${genre}`,{"headers":header})
}


}

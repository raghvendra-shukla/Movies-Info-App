import { Component, OnInit } from '@angular/core';
import { MoviesdataService } from 'src/app/service/moviesdata.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies:any;
  results:any | [];
  search:string="";
  constructor(private moviesdata:MoviesdataService) {
   }
  ngOnInit(): void {
    this.searchMovies(this.search);
  }

  searchMovies(search:string){
    this.search=search;
    // console.log(search);
    this.moviesdata.moviesData(search).subscribe((data)=>{
      // console.log(this.search);
      this.movies=data;
      this.results=this.movies.results
    });
  }

}

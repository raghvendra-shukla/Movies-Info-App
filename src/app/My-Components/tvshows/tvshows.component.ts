import { Component, OnInit } from '@angular/core';
import { MoviesdataService } from 'src/app/service/moviesdata.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TVshowsComponent implements OnInit {
  tvshows:any;
  results:any | [];
  search:string="";
  constructor(private tvshowsdata:MoviesdataService) {
   }
  ngOnInit(): void {
    this.searchMovies(this.search);
  }

  searchMovies(search:string){
    this.search=search;
    // console.log(search);
    this.tvshowsdata.tvshowsData(search).subscribe((data)=>{
      // console.log(this.search);
      this.tvshows=data;
      this.results=this.tvshows.results
    });
  }
}

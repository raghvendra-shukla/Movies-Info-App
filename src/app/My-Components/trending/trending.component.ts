import { Component, OnInit } from '@angular/core';
import { MoviesdataService } from 'src/app/service/moviesdata.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  Trendingmovies:any;
  results:any | [];
  constructor(private trendingdata:MoviesdataService) {
   }

  ngOnInit(): void {
    this.trendingdata.TrendingData().subscribe((data)=>{
      this.Trendingmovies=data;
      this.results=this.Trendingmovies.results
    });
  }

}

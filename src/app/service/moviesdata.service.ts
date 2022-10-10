import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesdataService {
  trending=`https://api.themoviedb.org/3/trending/all/day?api_key=bd35974228b82429f94ad851e881ac61`;
  constructor(private http : HttpClient) {
   }
   moviesData(query:string){
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=bd35974228b82429f94ad851e881ac61&language=en-US&query=${query||"batman"}&page=1&include_adult=false`);
   }
   TrendingData(){
    return this.http.get(this.trending);
   }
   tvshowsData(query:string){
    return this.http.get(`https://api.themoviedb.org/3/search/tv?api_key=bd35974228b82429f94ad851e881ac61&language=en-US&page=1&query=${query||"tom"}&include_adult=false`);
   }
}

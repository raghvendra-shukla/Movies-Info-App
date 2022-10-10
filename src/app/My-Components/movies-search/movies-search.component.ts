import { Component, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.css']
})
export class MoviesSearchComponent implements OnInit {
  ngOnInit(): void {}
  search:string="";
  @Output() moviesSearch:EventEmitter<string>=new EventEmitter();
  constructor(){
  }
  onSubmit(){
    const searchitem=this.search;
    this.moviesSearch.emit(searchitem);
  }
}

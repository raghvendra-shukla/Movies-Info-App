import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moviesitems',
  templateUrl: './moviesitems.component.html',
  styleUrls: ['./moviesitems.component.css']
})
export class MoviesitemsComponent implements OnInit {
  search:string="";
  constructor(){
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Movie } from '../../Movie';
import { MOVIES } from '../../mock-movies';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  movies: Movie[] = MOVIES;
  constructor() { }

  ngOnInit(): void {
  }


}

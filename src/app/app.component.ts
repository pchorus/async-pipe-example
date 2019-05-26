import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { StarWarsFilm } from './star-wars-film';
import { Observable } from 'rxjs';
import { StarWarsPerson } from './star-wars-person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  films: StarWarsFilm[];
  people$: Observable<StarWarsPerson[]>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.loadFilms().subscribe(films => this.films = films);
    this.people$ = this.dataService.loadPeople();
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SwapiResults } from './swapi-results';
import { StarWarsPerson } from './star-wars-person';
import { StarWarsFilm } from './star-wars-film';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private people$ = this.http.get<SwapiResults<StarWarsPerson>>('https://swapi.dev/api/people/').pipe(
    map(data => data.results),
    shareReplay({ bufferSize: 1, refCount: false })
  );

  constructor(private http: HttpClient) {}

  loadFilms() {
    return this.http.get<SwapiResults<StarWarsFilm>>('https://swapi.dev/api/films/').pipe(
      map(data => data.results)
    );
  }

  loadPeople() {
    return this.people$;
  }
}

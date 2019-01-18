import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class MovieService {
    constructor(private _http: Http) { }

    getMovies(): Observable<any> {
        return this._http
          .get('http://www.omdbapi.com/?apikey=17c81f32&s=Batman').pipe(
            map(response => response.json())
          );
      }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { SearchItem } from './../../_models/search-item.model';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'X-Meili-Api-Key': '9e2d1fdfc899eaa5ce120a10fc9e28f7ea69a7e87cbd480f6601b64ca59e21ea',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private readonly searchUrl = 'https://search.intencje.pl';

  constructor(private http: HttpClient) {}

  search(query: string): Observable<SearchItem[]> {
    return this.http
      .get<SearchItem[]>(
        `${this.searchUrl}/indexes/prayers/search?q=${query}&attributesToHighlight=title,content`,
        httpOptions,
      )
      .pipe(
        map((res) => res['hits']),
        catchError(this.handleError),
      );
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return observableThrowError(res.error || 'Server error');
  }
}

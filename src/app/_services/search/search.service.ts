import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { SearchItem } from './../../_models/search-item.model';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'X-Meili-Api-Key': 'a5ba5447a668cd711921a199d7e3af97cb4a5f00fa1aae1453c455430b0af0cb',
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

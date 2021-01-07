import { Component, OnInit, PLATFORM_ID, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, NEVER, Subject, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { SearchService } from './../../_services/search/search.service';
import { SearchItem } from './../../_models/search-item.model';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(public dialog: MatDialog) {}

  openSearchDialog() {
    this.dialog.open(SearchDialog, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '80%',
      width: '80%',
      id: 'search',
      data: {
        animal: 'panda',
      },
    });
  }
}

@Component({
  selector: 'app-search-dialog',
  templateUrl: 'search-dialog.html',
  styleUrls: ['search-dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SearchService],
})
export class SearchDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private searchService: SearchService) {}
  countriesResult: Observable<SearchItem[]>;
  private searchTerms = new Subject<string>();
  searchResults: Observable<SearchItem[]>;

  empty = false;
  countryFilterTooShort = false;
  value = '';

  // doTheSearch($event: Event) {
  //   this.empty = false;
  //   this.countryFilterTooShort = false;

  //   const query = ($event.target as HTMLInputElement).value;

  //   console.log(query);

  //   this.countriesResult = this.searchService.getCountriesByName(query).pipe(
  //     catchError((err) => {
  //       this.empty = err.status === 404;
  //       return NEVER;
  //     }),
  //   );
  // }

  search(term: string): void {
    // Push a search term into the observable stream.
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.searchResults = this.searchTerms.pipe(
      //debounceTime(100), // wait for 300ms pause in events
      distinctUntilChanged(), // ignore if next search term is same as previous
      switchMap((term) =>
        term // switch to new observable each time
          ? // return the http search observable
            this.searchService.search(term)
          : // or the observable of empty heroes if no search term
            of<SearchItem[]>([]),
      ),
      catchError((error) => {
        // TODO: real error handling
        console.log(`Error in component ... ${error}`);
        return of<SearchItem[]>([]);
      }),
    );
  }
}

//https://github.com/bikecoders/ngx-input-search/tree/master/apps/demo/src

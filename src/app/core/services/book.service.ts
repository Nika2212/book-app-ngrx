import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API, SEARCH_KEYWORD } from '../../config/http';

@Injectable()
export class BookService {
  constructor(
    private http: HttpClient
  ) {}

  public getBooks(): Promise<void> {
    return new Promise<void>(resolve => {
      const URL: string = ``;

      // TODO : - Get Favorite Books;
      // TODO : - Get Selected Book;
      // TODO : - Map And Store Data;

      this.http.get<unknown>(URL)
        .subscribe(payload => {

          resolve();
        })
        .unsubscribe();
    });
  }
}

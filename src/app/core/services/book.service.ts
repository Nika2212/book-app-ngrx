import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API, API_KEY, SEARCH_KEYWORD } from '../../config/http';
import { BaseResponse } from '../../shared/models/base-response.model';
import { mapBook } from '../utils/mapper';
import { Storage } from '../utils/storage';
import { StorageGroups } from '../enums/storage-groups';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { StoreBooksAction, StoreFavoritesAction } from '../../store/actions/book.action';
import { Book } from '../../shared/models/book.model';

@Injectable()
export class BookService {
  constructor(
    private store: Store<AppState>,
    private http: HttpClient
  ) {}

  public getBooks(): Promise<void> {
    return new Promise<void>(resolve => {
      const URL: string = `${API}?q=${SEARCH_KEYWORD}&key=${API_KEY}`;

      const sub = this.http.get<BaseResponse>(URL)
        .subscribe((payload: BaseResponse) => {

          const books = payload.items.map(i => mapBook(i));
          const favoriteBooks = Storage.get<Book>(StorageGroups.FAVORITE_BOOKS);

          this.store.dispatch(new StoreBooksAction(books));
          this.store.dispatch(new StoreFavoritesAction(favoriteBooks));

          resolve();

          try {
            sub.unsubscribe();
          } catch (e) {
            throw new Error(e);
          }
        });
    });
  }
}

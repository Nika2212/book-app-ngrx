import { Action } from '@ngrx/store';
import { Book } from '../../shared/models/book.model';

export enum BookActionTypes {
  STORE_BOOKS = '[BOOKS] Store Books',
  STORE_FAVORITES = '[BOOKS] Store Favorites',
  ADD_FAVORITE = '[BOOKS] Add Favorite',
  REMOVE_FAVORITE = '[BOOKS] Remove Favorite',
  CLEAR_FAVORITES = '[BOOKS] Clear Favorites'
}

export class StoreBooksAction implements Action {
  public readonly type: BookActionTypes = BookActionTypes.STORE_BOOKS;

  constructor(public readonly payload: Book[]) {}
}

export class StoreFavoritesAction implements Action {
  public readonly type: BookActionTypes = BookActionTypes.STORE_FAVORITES;

  constructor(public readonly payload: Book[]) {}
}

export class AddFavoriteAction implements Action {
  public readonly type: BookActionTypes = BookActionTypes.ADD_FAVORITE;

  constructor(public readonly payload: Book) {}
}

export class RemoveFavoriteAction implements Action {
  public readonly type: BookActionTypes = BookActionTypes.REMOVE_FAVORITE;

  constructor(public readonly payload: string) {}
}

export class ClearFavoritesAction implements Action {
  public readonly type: BookActionTypes = BookActionTypes.CLEAR_FAVORITES;

  constructor() {}
}

export type BookAction = StoreBooksAction | StoreFavoritesAction | AddFavoriteAction | RemoveFavoriteAction | ClearFavoritesAction;

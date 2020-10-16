import { BookState } from '../states/book.state';
import {
  AddFavoriteAction,
  BookAction,
  BookActionTypes, ClearFavoritesAction,
  RemoveFavoriteAction,
  StoreBooksAction,
  StoreFavoritesAction
} from '../actions/book.action';

const initialState: BookState = {
  storedBooks: [],
  storedBookIds: [],
  favoriteBooks: [],
  favoriteBookIds: []
};

export function bookReducer(state: BookState = initialState, action: BookAction): BookState {
  if (action.type === BookActionTypes.STORE_BOOKS && action instanceof StoreBooksAction) {
    return { ...state, storedBooks: [...action.payload], storedBookIds: [...action.payload.map(e => e.id)] };
  } else if (action.type === BookActionTypes.STORE_FAVORITES && action instanceof StoreFavoritesAction) {
    return { ...state, favoriteBooks: [...action.payload], favoriteBookIds: [...action.payload.map(e => e.id)] };
  } else if (action.type === BookActionTypes.ADD_FAVORITE && action instanceof AddFavoriteAction) {
    return { ...state, favoriteBooks: [...state.favoriteBooks, action.payload], favoriteBookIds: [...state.favoriteBookIds, action.payload.id] };
  } else if (action.type === BookActionTypes.REMOVE_FAVORITE && action instanceof RemoveFavoriteAction) {
    return { ...state, favoriteBooks: state.favoriteBooks.filter(e => e.id !== action.payload), favoriteBookIds: state.favoriteBookIds.filter(id => id !== action.payload) };
  } else if (action.type === BookActionTypes.CLEAR_FAVORITES && action instanceof ClearFavoritesAction) {
    return { ...state, favoriteBooks: [], favoriteBookIds: [] };
  }
}


import { Book } from '../../shared/models/book.model';

export class BookState {
  public storedBooks: Book[];
  public storedBookIds: string;
  public favoriteBooks: Book[];
  public favoriteBookIds: string[];
  public selectedBook: Book;
  public selectedBookId: string;
}

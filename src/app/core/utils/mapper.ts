import { BookItemType } from '../types/book-item.type';
import { Book } from '../../shared/models/book.model';

export function mapBook(bookItem: BookItemType): Book {
  return new Book();
}

import { Book } from '../../shared/models/book.model';
import { BookItem } from '../../shared/models/book-item.model';

export function mapBook(bookItem: BookItem): Book {
  const newBook = new Book();

  newBook.id = bookItem.id;
  newBook.title = bookItem.volumeInfo.title;
  newBook.authors = bookItem.volumeInfo.authors;
  newBook.averageRating = bookItem.volumeInfo.averageRating || 4.1;
  newBook.buyLink = bookItem.saleInfo.buyLink;
  newBook.categories = bookItem.volumeInfo.categories;
  newBook.description = bookItem.volumeInfo.description;
  newBook.language = bookItem.volumeInfo.language;
  newBook.pageCount = bookItem.volumeInfo.pageCount;
  newBook.previewThumbnail = bookItem.volumeInfo.imageLinks.smallThumbnail;
  newBook.fullThumbnail = bookItem.volumeInfo.imageLinks.thumbnail;
  newBook.publishedDate = bookItem.volumeInfo.publishedDate;

  return newBook;
}

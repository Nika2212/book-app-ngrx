import { BookService } from '../services/book.service';

export function initialDataResolverFactory(provider: BookService) {
  return () => provider.getBooks();
}

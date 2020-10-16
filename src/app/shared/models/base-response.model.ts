import { BookItem } from './book-item.model';

export class BaseResponse {
  public items: BookItem[];
  public kind: string;
  public totalItems: number;
}

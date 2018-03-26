import { Book } from './book';

export class Author {
  private id: number;
  private name: string;
  private books: Array<Book>;
  
  constructor(id: number, name: string, books: Array<Book>) {}
}

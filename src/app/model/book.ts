import { Author } from './author';
import { Publisher } from './publisher';

export class Book {
  private id: number;
  private title: string;
  private publicationDate: string;
  private authors: Array<Author>;
  private publisher: Publisher;
  private isbn: string;
  private price: number;
  
  constructor (title: string, publicationDate: string, authors: Array<Author>, publisher: Publisher, isbn: string, price: number) {}
  
}

import { Author } from './author';
import { Publisher } from './publisher';

export class Book {
   id: number;
   title: string;
   description: string;
   imgSource: string;
   publicationDate: string;
   authors: Array<Author>;
   publisher: Publisher;
   isbn: string;
   price: number;
  
  constructor (title: string, imgSource: string, description: string, publicationDate: string,
               authors: Array<Author>, publisher: Publisher, isbn: string, price: number) {
    this.id = null;
    this.title = title;
    this.description = description;
    this.imgSource = imgSource;
    this.publicationDate = publicationDate;
    this.authors = new Array<Author>();
    this.publisher = publisher;
    this.isbn = isbn;
    this.price = price;
  }

}

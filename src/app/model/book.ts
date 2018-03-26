import { Author } from './author';
import { Publisher } from './publisher';
import { Comment } from './comment';

export class Book {
   id: number;
   title: string;
   description: string;
   evaluation: number;
   imgSource: string;
   publicationDate: string;
   authors: Array<Author>;
   comments: Array<Comment>;
   publisher: Publisher;
   isbn: string;
   price: number;
  
  constructor (title: string, imgSource: string, description: string, evaluation: number, publicationDate: string,
               authors: Array<Author>, publisher: Publisher, comments: Array<Comment>, isbn: string, price: number) {
    this.id = null;
    this.title = title;
    this.description = description;
    this.evaluation = evaluation;
    this.imgSource = imgSource;
    this.publicationDate = publicationDate;
    this.authors = authors;
    this.comments = comments;
    this.publisher = publisher;
    this.isbn = isbn;
    this.price = price;
  }

}

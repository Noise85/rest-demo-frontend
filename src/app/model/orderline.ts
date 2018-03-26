import { Book } from './book';

export class OrderLine {
  private id: number;
  private book: Book;
  private quantity: number;
  private price: number;
  
  constructor(id: number, book: Book, quantity: number, price: number) {}
}
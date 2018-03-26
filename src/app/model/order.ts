import { OrderLine } from './orderline';
import { User } from './user';

export class Order {
  private id: number;
  private code: string;
  private user: User;
  private orderLines: Array<OrderLine>;
  
  constructor(id: number, code: string, user: User, orderLines: Array<OrderLine>) {}
}

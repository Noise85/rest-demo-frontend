import { User } from './user';

export class Comment {
  id: number;
  text: string;
  user: User;
  
  constructor(text: string, user: User) {
    this.text = text;
    this.user = user;
  }
}

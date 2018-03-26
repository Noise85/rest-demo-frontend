import { Book } from '../model/book';
import { Comment } from '../model/comment';
import { User } from '../model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  latest: Array<Book>;
  comments: Array<Comment>;
  
  constructor() { }

  ngOnInit() {
    this.comments  = [
      new Comment('Very nice job!', new User(1, 'nick', 'pass', 'Enea', 'Bette', 'address', 'place')),
      new Comment('This is not a good work man!', new User(2, 'nuck', 'pass', 'John', 'Doe', 'address', 'place'))
    ];
    this.latest = [
       new Book('Learning Angular', '/assets/angular/1.jpg',
        'Become an angular profi in only 1 week! Become an angular profi in only 1 week! Become an angular profi in only 1 week!', 4,
                 '2018-01-01', null, null, this.comments, '234-55334-36355-8865', 35),
       new Book('AngularJS', '/assets/angular/2.jpg', 'An angularJS guide to hero', 5,
                 '2018-01-01', null, null, this.comments, '234-55334-36355-8865', 24),
       new Book('Angular 2 training book', '/assets/angular/3.jpg', '', 3,
                 '2018-01-01', null, null, this.comments, '234-55334-36355-8865', 54),
       new Book('Hands-On Full Stack dev with Angular 5', '/assets/angular/4.jpg', 'Description', 3,
                 '2018-01-01', null, null, this.comments, '234-55334-36355-8865', 62),
       new Book('AngularJS by example', '/assets/angular/5.jpg', 'Examples with fully working apps', 5,
                 '2018-01-01', null, null, this.comments, '234-55334-36355-8865', 15),
       new Book('Mastering AngularJS directives', '/assets/angular/6.jpg', 'You become a master', 5,
                 '2018-01-01', null, null, this.comments, '234-55334-36355-8865', 27),
       new Book('Angular 4 book', '/assets/angular/7.jpg', 'Only for the new techs addicts', 3,
                 '2018-01-01', null, null, this.comments, '234-55334-36355-8865', 65),
       new Book('AngularJS essentials', '/assets/angular/8.jpg', 'If you want to learn the basics', 1,
                 '2018-01-01', null, null, this.comments, '234-55334-36355-8865', 13),
    ];
  }

}

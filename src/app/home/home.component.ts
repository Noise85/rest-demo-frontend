import { Book } from '../model/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  latest: Book[];
  advised: Book[];
  
  constructor() { }

  ngOnInit() {
    this.latest = [
       new Book('Learning Angular', '/assets/angular/1.jpg', 'Become an angular profi in only 1 week!',
                 '2018-01-01', null, null, '234-55334-36355-8865', 35),
       new Book('AngularJS', '/assets/angular/2.jpg', 'An angularJS guide to hero',
                 '2018-01-01', null, null, '234-55334-36355-8865', 24),
       new Book('Angular 2 training book', '/assets/angular/3.jpg', '',
                 '2018-01-01', null, null, '234-55334-36355-8865', 54),
       new Book('Hands-On Full Stack dev with Angular 5', '/assets/angular/4.jpg', 'Description',
                 '2018-01-01', null, null, '234-55334-36355-8865', 62),
       new Book('AngularJS by example', '/assets/angular/5.jpg', 'Examples with fully working apps',
                 '2018-01-01', null, null, '234-55334-36355-8865', 15),
       new Book('Mastering AngularJS directives', '/assets/angular/6.jpg', 'You become a master',
                 '2018-01-01', null, null, '234-55334-36355-8865', 27),
       new Book('Angular 4 book', '/assets/angular/7.jpg', 'Only for the new techs addicts',
                 '2018-01-01', null, null, '234-55334-36355-8865', 65),
       new Book('AngularJS essentials', '/assets/angular/8.jpg', 'If you want to learn the basics',
                 '2018-01-01', null, null, '234-55334-36355-8865', 13),
    ];
    this.advised = [
       new Book('Spring core 5 training', '/assets/spring/1.jpg', 'Become an spring profi in only 1 week!',
                 '2018-01-01', null, null, '234-55334-36355-8865', 35),
       new Book('Learning spring 5', '/assets/spring/2.jpg', 'A spring guide to hero',
                 '2018-01-01', null, null, '234-55334-36355-8865', 24),
       new Book('Spring recipes', '/assets/spring/3.jpg', '',
                 '2018-01-01', null, null, '234-55334-36355-8865', 54),
       new Book('Spring 5 design patterns', '/assets/spring/4.jpg', 'Description',
                 '2018-01-01', null, null, '234-55334-36355-8865', 62),
       new Book('Mastering spring 5', '/assets/spring/5.jpg', 'Examples with fully working apps',
                 '2018-01-01', null, null, '234-55334-36355-8865', 15),
       new Book('Spring in action', '/assets/spring/6.jpg', 'You become a master',
                 '2018-01-01', null, null, '234-55334-36355-8865', 27),
       new Book('Pro spring', '/assets/spring/7.jpg', 'Only for the new techs addicts',
                 '2018-01-01', null, null, '234-55334-36355-8865', 65),
       new Book('Build web apps with Spring 5 and Angular', '/assets/spring/8.jpg', 'If you want to learn the basics',
                 '2018-01-01', null, null, '234-55334-36355-8865', 13),
    ];
  }

}

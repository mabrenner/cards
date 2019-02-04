import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { ConfigService } from 'src/app/shared/services/config.service';
import { PaginationInstance } from 'src/app/shared/components/pagination/pagination.service';
import { User } from '../auth/user';
import { UserService } from '../auth/user.service';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.scss']
})
export class BookshelfComponent implements OnInit {
  public users: User[] = [];

  public books: any;
  public config: PaginationInstance = {
    id: 'books',
    elementsPerPage: 6,
    currentPage: 1
  };
  public maxSize = 7;
  public selectedBook: any;

  constructor(
    private configService: ConfigService,
    private userService: UserService
    ) { }

  ngOnInit() {
    this.books = this.configService.getAll();
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
    });
  }

  addBook(name: any, author: any, year: any, link: any) {
    let arr = {
      name: name.value,
      author: author.value,
      year: year.value,
      image: link.value
    };

    this.configService.add(arr);

    name.value = '';
    author.value = '';
    year.value = '';
    link.value = '';
  }

  onPageChange(number: number) {
    this.config.currentPage = number;
  }

  removeBook(name: string) {
    this.configService.remove(name);
    this.books = this.configService.getAll();
  }


}

import { Component, OnInit } from '@angular/core';

import { ConfigService } from '../shared/services/config.service';
import { PaginationInstance } from '../shared/components/pagination/pagination.service';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.scss']
})
export class BookshelfComponent implements OnInit {

  public books: any;
  public config: PaginationInstance = {
    id: 'books',
    elementsPerPage: 10,
    currentPage: 1
  };
  public maxSize = 7;
  public selectedBook: any;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.books = this.configService.getAll();
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

import { Component, OnInit } from '@angular/core';

import { ConfigService } from './shared/services/config.service';
import { PaginationInstance } from './shared/components/pagination/pagination.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public books: any;
  public selectedBook: any;

  public maxSize = 7;
  public config: PaginationInstance = {
    id: 'books',
    elementsPerPage: 10,
    currentPage: 1
  };

  constructor(
    private configService: ConfigService,
    ) { }

  ngOnInit() {
    // this.configService.getAll().subscribe(data => this.books = data);
    this.books = this.configService.getAll();
  }

  public addBook(name: any, author: any, year: any, link: any) {
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

  removeBook(name: string) {
    this.configService.remove(name);
    this.books = this.configService.getAll();
  }

  onPageChange(number: number) {
    this.config.currentPage = number;
  }

}

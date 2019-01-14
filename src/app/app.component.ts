import { ModalService } from './modal.service';
import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from './config.service';
import { PaginationInstance } from './pagination.service';
import { InternalFormsSharedModule } from '@angular/forms/src/directives';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private configService: ConfigService,
    private modalService: ModalService
    ) { }

  public books;
  public selectedBook;

  public maxSize = 7;
  public config: PaginationInstance = {
    id: 'books',
    elementsPerPage: 10,
    currentPage: 1
};

  ngOnInit() {
    // this.configService.getAll().subscribe(data => this.books = data);
    this.books = this.configService.getAll();
  }

  public addBook(name, author, year, link) {

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

  closeModal(id: string) {
    this.modalService.close(id);
  }
}

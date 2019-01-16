import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Book} from '../book';
import { BOOKS } from '../mock-books';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private books = BOOKS;

  constructor(private http: HttpClient) { }

  // public getAll() {
  //   return this.http.get<string[]>('assets/data-mock.json');
  // }

  public getAll(): Book[] {
    return this.books;
  }

  public add(obj: any): any {
    return this.books.push(obj);
  }

  public remove(name: string): Book[] {
    return this.books = this.books.filter(book => book.name !== name);
  }

}

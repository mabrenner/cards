import { Pipe, PipeTransform } from '@angular/core';
import { PaginationService, PaginationInstance } from './pagination.service';

const LARGE_NUMBER = Number.MAX_SAFE_INTEGER;

@Pipe({
  name: 'pagination',
  pure: false
})
export class PaginationPipe implements PipeTransform {

  constructor(private service: PaginationService) {
  }

  transform(collection: any[], args: any): any {

    let instance = this.createInstance(collection, args);
    let id = instance.id;
    let start, end;
    let perPage = instance.elementsPerPage;

    this.service.register(instance);

    if (collection instanceof Array) {
        perPage = +perPage || LARGE_NUMBER;
        start = (instance.currentPage - 1) * perPage;
        end = start + perPage;

        let slice = collection.slice(start, end);
        this.service.change.emit(id);
        return slice;
    }

    return collection;
  }

  private createInstance(collection: any[], args: any): PaginationInstance {
    let config = args;

    return {
        id: config.id,
        elementsPerPage: config.elementsPerPage,
        currentPage: config.currentPage,
        totalElements: collection.length
    };
  }

}

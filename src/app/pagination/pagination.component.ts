import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { PaginationService, PaginationInstance } from '../shared/services/pagination.service';

export interface Page {
  label: string;
  value: any;
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  @Input() id: string;
  @Input() maxSize: number;

  private pages: Page[] = [];
  private changeSub: Subscription;

  constructor(private paginationService: PaginationService, private changeDetectorRef: ChangeDetectorRef) {
    this.changeSub = this.paginationService.change
            .subscribe(id => {
                if (this.id === id) {
                    this.updatePageLinks();
                }
            });
   }

  ngOnInit() {
    this.updatePageLinks();
  }

  previous() {
    this.setCurrentPage(this.getCurrent() - 1);
  }

  next() {
    this.setCurrentPage(this.getCurrent() + 1);
  }

  setCurrentPage(page: number) {
    this.pageChange.emit(page);
  }

  getCurrent(): number {
    return this.paginationService.getCurrentPage(this.id);
  }

  private updatePageLinks() {
    let instance = this.paginationService.getInstance(this.id);
    const correctedCurrentPage = this.outOfBoundCorrection(instance);

    if (correctedCurrentPage !== instance.currentPage) {
        setTimeout(() => {
            this.setCurrentPage(correctedCurrentPage);
            this.pages = this.createPageArray(instance.currentPage, instance.elementsPerPage, instance.totalElements, this.maxSize);
        });
    } else {
        this.pages = this.createPageArray(instance.currentPage, instance.elementsPerPage, instance.totalElements, this.maxSize);
    }
  }

  private outOfBoundCorrection(instance: PaginationInstance): number {
    const totalPages = Math.ceil(instance.totalElements / instance.elementsPerPage);
    if (totalPages < instance.currentPage && 0 < totalPages) {
        return totalPages;
    } else if (instance.currentPage < 1) {
        return 1;
    }

    return instance.currentPage;
  }

  private createPageArray(currentPage: number, elementsPerPage: number, totalElements: number, paginationRange: number): Page[] {
    let pages = [];
    const totalPages = Math.ceil(totalElements / elementsPerPage);
    const halfWay = Math.ceil(paginationRange / 2);

    const isStart = currentPage <= halfWay;
    const isEnd = totalPages - halfWay < currentPage;
    const isMiddle = !isStart && !isEnd;

    let ellipsesNeeded = paginationRange < totalPages;
    let i = 1;

    while (i <= totalPages && i <= paginationRange) {
        let label;
        let pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
        let openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
        let closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
        if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
            label = '...';
        } else {
            label = pageNumber;
        }
        pages.push({
            label: label,
            value: pageNumber
        });
        i++;
    }
    return pages;
  }

  private calculatePageNumber(i: number, currentPage: number, paginationRange: number, totalPages: number) {
    let halfWay = Math.ceil(paginationRange / 2);
    if (i === paginationRange) {
        return totalPages;
    } else if (i === 1) {
        return i;
    } else if (paginationRange < totalPages) {
        if (totalPages - halfWay < currentPage) {
            return totalPages - paginationRange + i;
        } else if (halfWay < currentPage) {
            return currentPage - halfWay + i;
        } else {
            return i;
        }
    } else {
        return i;
    }
  }

}

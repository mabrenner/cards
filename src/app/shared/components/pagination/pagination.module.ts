import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationComponent } from './pagination.component';
import { PaginationService } from './pagination.service';
import { PaginationPipe } from './pagination.pipe';

@NgModule({
  declarations: [
    PaginationComponent,
    PaginationPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginationComponent,
    PaginationPipe
  ],
  providers: [
    PaginationService
  ]
})
export class PaginationModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalDialogModule } from './components/modal-dialog/modal-dialog.module';
import { PaginationModule } from './components/pagination/pagination.module';

import { PaginationPipe } from './pipes/pagination.pipe';
import { ConfigService } from './services/config.service';

@NgModule({
  declarations: [
    PaginationPipe
  ],
  imports: [
    CommonModule,
    ModalDialogModule,
    PaginationModule
  ],
  exports: [
    ModalDialogModule,
    PaginationModule,
    PaginationPipe
  ]
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [ ConfigService ]
    };
  }
 }

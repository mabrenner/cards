import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalDialogModule } from './components/modal-dialog/modal-dialog.module';

import { PaginationPipe } from './pagination.pipe';
import { ConfigService } from './services/config.service';

@NgModule({
  declarations: [
    PaginationPipe
  ],
  imports: [
    CommonModule,
    ModalDialogModule
  ],
  exports: [
    ModalDialogModule,
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

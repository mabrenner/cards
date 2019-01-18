import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalDialogComponent } from './modal-dialog.component';
import { ModalDialogService } from './modal-dialog.service';

@NgModule({
  declarations: [
    ModalDialogComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalDialogComponent
  ]
})
export class ModalDialogModule {
  static forRoot() {
    return {
      ngModule: ModalDialogModule,
      providers: [ ModalDialogService ]
    };
  }
}

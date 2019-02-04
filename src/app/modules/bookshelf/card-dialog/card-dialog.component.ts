import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ModalDialogService } from 'src/app/shared/components/modal-dialog/modal-dialog.service';

@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.scss']
})
export class CardDialogComponent {

  @Input() book: any;
  @Output() bookDeleted: EventEmitter<any> = new EventEmitter;

  constructor(
    private modalDialogService: ModalDialogService
  ) { }

  closeModal(id: string) {
    this.modalDialogService.close(id);
  }

  deleteBook() {
    this.bookDeleted.emit();
  }

}

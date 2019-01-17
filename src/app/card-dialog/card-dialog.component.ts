import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ModalDialogService } from '../shared/services/modal-dialog.service';

@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.scss']
})
export class CardDialogComponent implements OnInit {

  @Input() book: any;
  @Output() bookDeleted: EventEmitter<any> = new EventEmitter;

  constructor(
    private modalDialogService: ModalDialogService
  ) { }

  ngOnInit() {
  }

  closeModal(id: string): void {
    this.modalDialogService.close(id);
  }

  deleteBook(): void {
    this.bookDeleted.emit();
  }

}

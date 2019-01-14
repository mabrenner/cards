import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalDialogService } from '../modal-dialog.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() book;
  @Output() bookSelected: EventEmitter<any> = new EventEmitter();

  constructor(
    private modalDialogService: ModalDialogService
    ) { }

  openModal(id: string) {
      this.modalDialogService.open(id);
  }

  selectBook() {
    this.bookSelected.emit();
  }
}

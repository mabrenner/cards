import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ModalDialogService } from '../shared/services/modal-dialog.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() book: any;
  @Output() bookSelected: EventEmitter<any> = new EventEmitter();

  constructor(
    private modalDialogService: ModalDialogService
    ) { }

  openModal(id: string): void {
      this.modalDialogService.open(id);
  }

  selectBook(): void {
    this.bookSelected.emit();
  }
}

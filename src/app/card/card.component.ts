import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() book;
  @Output() bookSelected: EventEmitter<any> = new EventEmitter();

  constructor(
    private modalService: ModalService
    ) { }

  openModal(id: string) {
      this.modalService.open(id);
  }

  selectBook() {
    this.bookSelected.emit();
  }
}

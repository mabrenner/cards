import { Component, OnInit, Input, ElementRef, OnDestroy, Renderer2 } from '@angular/core';

import { ModalDialogService } from '../shared/services/modal-dialog.service';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss']
})
export class ModalDialogComponent implements OnInit, OnDestroy {

  @Input() id: string;

  private element: any;

  constructor(
    private modalDialogService: ModalDialogService,
    private el: ElementRef,
    private renderer: Renderer2) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    let modal = this;

    this.renderer.appendChild(document.body, this.element);

    this.renderer.listen(this.element, 'click', (event: any) => {
      if (event.target.className === 'modal') {
        modal.close();
      }
    });

    this.modalDialogService.add(this);
  }

  ngOnDestroy(): void {
    this.modalDialogService.remove(this.id);
    this.element.remove();
  }

  open(): void {
    this.renderer.setStyle(this.element, 'display', 'block');
    this.renderer.addClass(document.body, 'modal-open');
  }

  close(): void {
    this.renderer.setStyle(this.element, 'display', 'none');
    this.renderer.removeClass(document.body, 'modal-open');
  }
}

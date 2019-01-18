import { Component, OnInit, Input, ElementRef, OnDestroy, Renderer2 } from '@angular/core';

import { ModalDialogService } from './modal-dialog.service';

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

  ngOnInit() {
    let modal = this;

    this.renderer.appendChild(document.body, this.element);

    this.renderer.listen(this.element, 'click', (event: any) => {
      if (event.target.className === 'modal') {
        modal.close();
      }
    });

    this.modalDialogService.add(this);
  }

  ngOnDestroy() {
    this.modalDialogService.remove(this.id);
    this.element.remove();
  }

  open() {
    this.renderer.setStyle(this.element, 'display', 'block');
    this.renderer.addClass(document.body, 'modal-open');
  }

  close() {
    this.renderer.setStyle(this.element, 'display', 'none');
    this.renderer.removeClass(document.body, 'modal-open');
  }
}

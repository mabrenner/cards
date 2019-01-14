import { Component, OnInit, Input, ElementRef, OnDestroy } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss']
})
export class ModalDialogComponent implements OnInit, OnDestroy {

  @Input() id: string;

  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
      this.element = el.nativeElement;
  }

  ngOnInit(): void {
      let modal = this;

      // переместить элемент в конец страницы (непосредственно перед </ body>), чтобы он мог отображаться над всем остальным
      document.body.appendChild(this.element);

      this.element.addEventListener('click', function (e: any) {
          if (e.target.className === 'modal') {
              modal.close();
          }
      });

      // добавить этот модальный экземпляр к модальному сервису, чтобы он был доступен из контроллеров
      this.modalService.add(this);
  }

  // удалить этот модальный экземпляр из модального сервиса, когда директива уничтожена
  ngOnDestroy(): void {
      this.modalService.remove(this.id);
      this.element.remove();
  }

  open(): void {
      this.element.style.display = 'block';
      document.body.classList.add('modal-open');
  }

  close(): void {
      this.element.style.display = 'none';
      document.body.classList.remove('modal-open');
  }
}

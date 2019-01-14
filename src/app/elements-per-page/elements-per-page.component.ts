import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-elements-per-page',
  templateUrl: './elements-per-page.component.html',
  styleUrls: ['./elements-per-page.component.scss']
})
export class ElementsPerPageComponent implements OnInit {

  @Input() elementsPerPage;

  private label = 'Количество записей на страницу:';

  constructor() { }

  ngOnInit() {
  }

}

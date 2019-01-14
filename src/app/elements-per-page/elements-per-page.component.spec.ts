import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsPerPageComponent } from './elements-per-page.component';

describe('ElementsPerPageComponent', () => {
  let component: ElementsPerPageComponent;
  let fixture: ComponentFixture<ElementsPerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementsPerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementsPerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

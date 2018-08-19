import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksActionMenuComponent } from './books-action-menu.component';

describe('BooksActionMenuComponent', () => {
  let component: BooksActionMenuComponent;
  let fixture: ComponentFixture<BooksActionMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksActionMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksActionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

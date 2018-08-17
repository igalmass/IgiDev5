import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookActionMenuComponent } from './book-action-menu.component';

describe('BookActionMenuComponent', () => {
  let component: BookActionMenuComponent;
  let fixture: ComponentFixture<BookActionMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookActionMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookActionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

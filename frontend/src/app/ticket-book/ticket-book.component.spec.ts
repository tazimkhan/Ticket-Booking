import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketBookComponent } from './ticket-book.component';

describe('TicketBookComponent', () => {
  let component: TicketBookComponent;
  let fixture: ComponentFixture<TicketBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCarServiceComponent } from './card-car-service.component';

describe('CardCarServiceComponent', () => {
  let component: CardCarServiceComponent;
  let fixture: ComponentFixture<CardCarServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCarServiceComponent]
    });
    fixture = TestBed.createComponent(CardCarServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

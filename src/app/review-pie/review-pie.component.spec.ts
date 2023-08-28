import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewPieComponent } from './review-pie.component';

describe('ReviewPieComponent', () => {
  let component: ReviewPieComponent;
  let fixture: ComponentFixture<ReviewPieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewPieComponent]
    });
    fixture = TestBed.createComponent(ReviewPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

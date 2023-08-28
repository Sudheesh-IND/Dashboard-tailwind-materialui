import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionBarChartComponent } from './transaction-bar-chart.component';

describe('TransactionBarChartComponent', () => {
  let component: TransactionBarChartComponent;
  let fixture: ComponentFixture<TransactionBarChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionBarChartComponent]
    });
    fixture = TestBed.createComponent(TransactionBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

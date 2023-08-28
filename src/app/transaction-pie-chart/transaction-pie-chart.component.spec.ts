import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionPieChartComponent } from './transaction-pie-chart.component';

describe('TransactionPieChartComponent', () => {
  let component: TransactionPieChartComponent;
  let fixture: ComponentFixture<TransactionPieChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionPieChartComponent]
    });
    fixture = TestBed.createComponent(TransactionPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

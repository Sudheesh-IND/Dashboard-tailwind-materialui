import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaChartDashComponent } from './area-chart-dash.component';

describe('AreaChartDashComponent', () => {
  let component: AreaChartDashComponent;
  let fixture: ComponentFixture<AreaChartDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaChartDashComponent]
    });
    fixture = TestBed.createComponent(AreaChartDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

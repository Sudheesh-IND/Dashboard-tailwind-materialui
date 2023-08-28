import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaChartServiceComponent } from './area-chart-service.component';

describe('AreaChartServiceComponent', () => {
  let component: AreaChartServiceComponent;
  let fixture: ComponentFixture<AreaChartServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaChartServiceComponent]
    });
    fixture = TestBed.createComponent(AreaChartServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

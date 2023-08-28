import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieDashComponent } from './pie-dash.component';

describe('PieDashComponent', () => {
  let component: PieDashComponent;
  let fixture: ComponentFixture<PieDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PieDashComponent]
    });
    fixture = TestBed.createComponent(PieDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

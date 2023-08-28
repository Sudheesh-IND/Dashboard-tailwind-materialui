import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDashComponent } from './table-dash.component';

describe('TableDashComponent', () => {
  let component: TableDashComponent;
  let fixture: ComponentFixture<TableDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableDashComponent]
    });
    fixture = TestBed.createComponent(TableDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

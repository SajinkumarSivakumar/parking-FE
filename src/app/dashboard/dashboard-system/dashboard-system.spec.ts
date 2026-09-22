import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSystem } from './dashboard-system';

describe('DashboardSystem', () => {
  let component: DashboardSystem;
  let fixture: ComponentFixture<DashboardSystem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSystem],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardSystem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

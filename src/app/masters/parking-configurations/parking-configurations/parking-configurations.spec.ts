import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingConfigurations } from './parking-configurations';

describe('ParkingConfigurations', () => {
  let component: ParkingConfigurations;
  let fixture: ComponentFixture<ParkingConfigurations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkingConfigurations],
    }).compileComponents();

    fixture = TestBed.createComponent(ParkingConfigurations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingConfigurationsManage } from './parking-configurations-manage';

describe('ParkingConfigurationsManage', () => {
  let component: ParkingConfigurationsManage;
  let fixture: ComponentFixture<ParkingConfigurationsManage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkingConfigurationsManage],
    }).compileComponents();

    fixture = TestBed.createComponent(ParkingConfigurationsManage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

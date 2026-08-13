import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionsManage } from './permissions-manage';

describe('PermissionsManage', () => {
  let component: PermissionsManage;
  let fixture: ComponentFixture<PermissionsManage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermissionsManage],
    }).compileComponents();

    fixture = TestBed.createComponent(PermissionsManage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

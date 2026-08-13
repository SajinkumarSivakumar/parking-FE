import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermanagementManage } from './usermanagement-manage';

describe('UsermanagementManage', () => {
  let component: UsermanagementManage;
  let fixture: ComponentFixture<UsermanagementManage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsermanagementManage],
    }).compileComponents();

    fixture = TestBed.createComponent(UsermanagementManage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

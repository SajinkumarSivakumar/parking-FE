import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchManage } from './branch-manage';

describe('BranchManage', () => {
  let component: BranchManage;
  let fixture: ComponentFixture<BranchManage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BranchManage],
    }).compileComponents();

    fixture = TestBed.createComponent(BranchManage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

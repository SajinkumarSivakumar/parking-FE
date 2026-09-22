import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sample1 } from './sample1';

describe('Sample1', () => {
  let component: Sample1;
  let fixture: ComponentFixture<Sample1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sample1],
    }).compileComponents();

    fixture = TestBed.createComponent(Sample1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

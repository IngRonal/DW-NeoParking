import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createdeposit } from './createdeposit';

describe('Createdeposit', () => {
  let component: Createdeposit;
  let fixture: ComponentFixture<Createdeposit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Createdeposit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Createdeposit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

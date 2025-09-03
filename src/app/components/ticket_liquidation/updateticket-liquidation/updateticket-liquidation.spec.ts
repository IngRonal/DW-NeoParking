import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateticketLiquidation } from './updateticket-liquidation';

describe('UpdateticketLiquidation', () => {
  let component: UpdateticketLiquidation;
  let fixture: ComponentFixture<UpdateticketLiquidation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateticketLiquidation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateticketLiquidation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

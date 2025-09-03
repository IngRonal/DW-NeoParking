import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllticketLiquidation } from './get-allticket-liquidation';

describe('GetAllticketLiquidation', () => {
  let component: GetAllticketLiquidation;
  let fixture: ComponentFixture<GetAllticketLiquidation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllticketLiquidation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllticketLiquidation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

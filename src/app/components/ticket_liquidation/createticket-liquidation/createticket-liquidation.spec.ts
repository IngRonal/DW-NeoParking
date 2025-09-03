import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateticketLiquidation } from './createticket-liquidation';

describe('CreateticketLiquidation', () => {
  let component: CreateticketLiquidation;
  let fixture: ComponentFixture<CreateticketLiquidation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateticketLiquidation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateticketLiquidation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

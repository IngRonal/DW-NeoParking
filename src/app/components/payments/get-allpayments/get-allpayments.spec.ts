import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllpayments } from './get-allpayments';

describe('GetAllpayments', () => {
  let component: GetAllpayments;
  let fixture: ComponentFixture<GetAllpayments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllpayments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllpayments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

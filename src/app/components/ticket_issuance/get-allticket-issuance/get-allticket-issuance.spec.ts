import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllticketIssuance } from './get-allticket-issuance';

describe('GetAllticketIssuance', () => {
  let component: GetAllticketIssuance;
  let fixture: ComponentFixture<GetAllticketIssuance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllticketIssuance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllticketIssuance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

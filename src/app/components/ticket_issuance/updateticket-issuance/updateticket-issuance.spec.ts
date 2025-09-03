import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateticketIssuance } from './updateticket-issuance';

describe('UpdateticketIssuance', () => {
  let component: UpdateticketIssuance;
  let fixture: ComponentFixture<UpdateticketIssuance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateticketIssuance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateticketIssuance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

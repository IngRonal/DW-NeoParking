import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAlldeposit } from './get-alldeposit';

describe('GetAlldeposit', () => {
  let component: GetAlldeposit;
  let fixture: ComponentFixture<GetAlldeposit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAlldeposit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAlldeposit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

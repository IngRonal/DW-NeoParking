import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatedeposit } from './updatedeposit';

describe('Updatedeposit', () => {
  let component: Updatedeposit;
  let fixture: ComponentFixture<Updatedeposit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updatedeposit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatedeposit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

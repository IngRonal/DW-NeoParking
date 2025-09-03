import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllsquares } from './get-allsquares';

describe('GetAllsquares', () => {
  let component: GetAllsquares;
  let fixture: ComponentFixture<GetAllsquares>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllsquares]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllsquares);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

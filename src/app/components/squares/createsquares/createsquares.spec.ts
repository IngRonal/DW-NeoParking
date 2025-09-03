import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createsquares } from './createsquares';

describe('Createsquares', () => {
  let component: Createsquares;
  let fixture: ComponentFixture<Createsquares>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Createsquares]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Createsquares);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

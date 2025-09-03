import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatesquares } from './updatesquares';

describe('Updatesquares', () => {
  let component: Updatesquares;
  let fixture: ComponentFixture<Updatesquares>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updatesquares]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatesquares);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

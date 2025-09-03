import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createaccess } from './createaccess';

describe('Createaccess', () => {
  let component: Createaccess;
  let fixture: ComponentFixture<Createaccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Createaccess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Createaccess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createincidents } from './createincidents';

describe('Createincidents', () => {
  let component: Createincidents;
  let fixture: ComponentFixture<Createincidents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Createincidents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Createincidents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

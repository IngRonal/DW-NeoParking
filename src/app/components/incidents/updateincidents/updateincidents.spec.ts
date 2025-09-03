import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updateincidents } from './updateincidents';

describe('Updateincidents', () => {
  let component: Updateincidents;
  let fixture: ComponentFixture<Updateincidents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updateincidents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updateincidents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

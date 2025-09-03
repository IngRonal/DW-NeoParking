import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createvehicle } from './createvehicle';

describe('Createvehicle', () => {
  let component: Createvehicle;
  let fixture: ComponentFixture<Createvehicle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Createvehicle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Createvehicle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

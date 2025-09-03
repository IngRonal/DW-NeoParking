import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllvehicle } from './get-allvehicle';

describe('GetAllvehicle', () => {
  let component: GetAllvehicle;
  let fixture: ComponentFixture<GetAllvehicle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllvehicle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllvehicle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

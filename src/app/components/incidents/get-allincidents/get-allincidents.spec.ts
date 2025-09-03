import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllincidents } from './get-allincidents';

describe('GetAllincidents', () => {
  let component: GetAllincidents;
  let fixture: ComponentFixture<GetAllincidents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllincidents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllincidents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

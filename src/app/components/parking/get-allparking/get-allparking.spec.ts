import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllparking } from './get-allparking';

describe('GetAllparking', () => {
  let component: GetAllparking;
  let fixture: ComponentFixture<GetAllparking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllparking]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllparking);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

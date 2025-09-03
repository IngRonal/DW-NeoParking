import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createparking } from './createparking';

describe('Createparking', () => {
  let component: Createparking;
  let fixture: ComponentFixture<Createparking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Createparking]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Createparking);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

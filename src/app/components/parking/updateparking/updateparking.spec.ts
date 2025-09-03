import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updateparking } from './updateparking';

describe('Updateparking', () => {
  let component: Updateparking;
  let fixture: ComponentFixture<Updateparking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updateparking]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updateparking);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

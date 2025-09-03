import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createrates } from './createrates';

describe('Createrates', () => {
  let component: Createrates;
  let fixture: ComponentFixture<Createrates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Createrates]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Createrates);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

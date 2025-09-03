import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updaterates } from './updaterates';

describe('Updaterates', () => {
  let component: Updaterates;
  let fixture: ComponentFixture<Updaterates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updaterates]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updaterates);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

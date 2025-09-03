import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllrates } from './get-allrates';

describe('GetAllrates', () => {
  let component: GetAllrates;
  let fixture: ComponentFixture<GetAllrates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllrates]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllrates);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

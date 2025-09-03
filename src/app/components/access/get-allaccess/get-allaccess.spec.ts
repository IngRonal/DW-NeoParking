import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllaccess } from './get-allaccess';

describe('GetAllaccess', () => {
  let component: GetAllaccess;
  let fixture: ComponentFixture<GetAllaccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllaccess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllaccess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

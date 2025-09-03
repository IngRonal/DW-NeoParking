import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllClient } from './get-all-client';

describe('GetAllClient', () => {
  let component: GetAllClient;
  let fixture: ComponentFixture<GetAllClient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllClient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllincomeReports } from './get-allincome-reports';

describe('GetAllincomeReports', () => {
  let component: GetAllincomeReports;
  let fixture: ComponentFixture<GetAllincomeReports>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllincomeReports]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllincomeReports);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateincomeReports } from './updateincome-reports';

describe('UpdateincomeReports', () => {
  let component: UpdateincomeReports;
  let fixture: ComponentFixture<UpdateincomeReports>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateincomeReports]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateincomeReports);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

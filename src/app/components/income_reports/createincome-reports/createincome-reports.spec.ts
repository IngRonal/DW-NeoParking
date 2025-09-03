import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateincomeReports } from './createincome-reports';

describe('CreateincomeReports', () => {
  let component: CreateincomeReports;
  let fixture: ComponentFixture<CreateincomeReports>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateincomeReports]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateincomeReports);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

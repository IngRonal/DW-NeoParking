import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesubticketIssuance } from './createsubticket-issuance';

describe('CreatesubticketIssuance', () => {
  let component: CreatesubticketIssuance;
  let fixture: ComponentFixture<CreatesubticketIssuance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatesubticketIssuance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatesubticketIssuance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllsubscription } from './get-allsubscription';

describe('GetAllsubscription', () => {
  let component: GetAllsubscription;
  let fixture: ComponentFixture<GetAllsubscription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllsubscription]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllsubscription);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

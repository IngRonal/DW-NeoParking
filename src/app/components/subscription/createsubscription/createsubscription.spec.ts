import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createsubscription } from './createsubscription';

describe('Createsubscription', () => {
  let component: Createsubscription;
  let fixture: ComponentFixture<Createsubscription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Createsubscription]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Createsubscription);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

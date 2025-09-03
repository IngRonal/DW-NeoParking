import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatesubscription } from './updatesubscription';

describe('Updatesubscription', () => {
  let component: Updatesubscription;
  let fixture: ComponentFixture<Updatesubscription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updatesubscription]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatesubscription);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

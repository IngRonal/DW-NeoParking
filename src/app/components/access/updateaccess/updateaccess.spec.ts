import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updateaccess } from './updateaccess';

describe('Updateaccess', () => {
  let component: Updateaccess;
  let fixture: ComponentFixture<Updateaccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updateaccess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updateaccess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

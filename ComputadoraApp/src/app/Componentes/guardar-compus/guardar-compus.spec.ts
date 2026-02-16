import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarCompus } from './guardar-compus';

describe('GuardarCompus', () => {
  let component: GuardarCompus;
  let fixture: ComponentFixture<GuardarCompus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuardarCompus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarCompus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarRol } from './guardar-rol';

describe('GuardarRol', () => {
  let component: GuardarRol;
  let fixture: ComponentFixture<GuardarRol>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuardarRol]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarRol);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

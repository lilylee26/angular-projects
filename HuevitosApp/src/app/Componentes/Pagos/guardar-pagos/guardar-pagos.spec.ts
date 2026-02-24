import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarPagos } from './guardar-pagos';

describe('GuardarPagos', () => {
  let component: GuardarPagos;
  let fixture: ComponentFixture<GuardarPagos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuardarPagos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarPagos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

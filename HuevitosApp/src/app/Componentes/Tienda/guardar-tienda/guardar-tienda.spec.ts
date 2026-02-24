import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarTienda } from './guardar-tienda';

describe('GuardarTienda', () => {
  let component: GuardarTienda;
  let fixture: ComponentFixture<GuardarTienda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuardarTienda]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarTienda);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarDetallePedido } from './guardar-detalle-pedido';

describe('GuardarDetallePedido', () => {
  let component: GuardarDetallePedido;
  let fixture: ComponentFixture<GuardarDetallePedido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuardarDetallePedido]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarDetallePedido);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

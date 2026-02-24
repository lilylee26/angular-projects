import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDetallePedido } from './editar-detalle-pedido';

describe('EditarDetallePedido', () => {
  let component: EditarDetallePedido;
  let fixture: ComponentFixture<EditarDetallePedido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarDetallePedido]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarDetallePedido);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

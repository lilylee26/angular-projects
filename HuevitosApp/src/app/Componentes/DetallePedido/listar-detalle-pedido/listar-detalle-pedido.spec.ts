import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDetallePedido } from './listar-detalle-pedido';

describe('ListarDetallePedido', () => {
  let component: ListarDetallePedido;
  let fixture: ComponentFixture<ListarDetallePedido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarDetallePedido]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarDetallePedido);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

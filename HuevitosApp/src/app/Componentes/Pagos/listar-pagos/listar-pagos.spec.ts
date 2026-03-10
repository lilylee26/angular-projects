import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPagos } from './listar-pagos';

describe('ListarPagos', () => {
  let component: ListarPagos;
  let fixture: ComponentFixture<ListarPagos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarPagos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPagos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

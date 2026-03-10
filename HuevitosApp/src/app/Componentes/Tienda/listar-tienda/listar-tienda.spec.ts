import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTienda } from './listar-tienda';

describe('ListarTienda', () => {
  let component: ListarTienda;
  let fixture: ComponentFixture<ListarTienda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarTienda]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTienda);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

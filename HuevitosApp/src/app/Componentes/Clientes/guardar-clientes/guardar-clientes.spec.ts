import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarClientes } from './guardar-clientes';

describe('GuardarClientes', () => {
  let component: GuardarClientes;
  let fixture: ComponentFixture<GuardarClientes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuardarClientes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarClientes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

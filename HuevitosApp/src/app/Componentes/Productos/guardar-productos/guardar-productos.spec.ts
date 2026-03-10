import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarProductos } from './guardar-productos';

describe('GuardarProductos', () => {
  let component: GuardarProductos;
  let fixture: ComponentFixture<GuardarProductos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuardarProductos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarProductos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

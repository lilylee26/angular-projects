import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPagos } from './editar-pagos';

describe('EditarPagos', () => {
  let component: EditarPagos;
  let fixture: ComponentFixture<EditarPagos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarPagos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPagos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

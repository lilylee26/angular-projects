import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCompus } from './listar-compus';

describe('ListarCompus', () => {
  let component: ListarCompus;
  let fixture: ComponentFixture<ListarCompus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarCompus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarCompus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

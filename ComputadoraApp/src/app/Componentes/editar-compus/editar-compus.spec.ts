import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCompus } from './editar-compus';

describe('EditarCompus', () => {
  let component: EditarCompus;
  let fixture: ComponentFixture<EditarCompus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarCompus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarCompus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaProductoraComponent } from './ruta-productora.component';

describe('RutaProductoraComponent', () => {
  let component: RutaProductoraComponent;
  let fixture: ComponentFixture<RutaProductoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaProductoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaProductoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

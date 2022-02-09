import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaProductoraInfoComponent } from './ruta-productora-info.component';

describe('RutaProductoraInfoComponent', () => {
  let component: RutaProductoraInfoComponent;
  let fixture: ComponentFixture<RutaProductoraInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaProductoraInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaProductoraInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

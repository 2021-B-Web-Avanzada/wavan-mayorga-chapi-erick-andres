import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaProductoraNuevoComponent } from './ruta-productora-nuevo.component';

describe('RutaProductoraNuevoComponent', () => {
  let component: RutaProductoraNuevoComponent;
  let fixture: ComponentFixture<RutaProductoraNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaProductoraNuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaProductoraNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

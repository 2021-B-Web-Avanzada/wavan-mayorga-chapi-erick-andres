import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaResultadosComponent } from './ruta-resultados.component';

describe('RutaResultadosComponent', () => {
  let component: RutaResultadosComponent;
  let fixture: ComponentFixture<RutaResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaResultadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

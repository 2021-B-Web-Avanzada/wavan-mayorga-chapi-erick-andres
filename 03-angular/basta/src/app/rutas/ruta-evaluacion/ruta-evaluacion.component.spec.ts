import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEvaluacionComponent } from './ruta-evaluacion.component';

describe('RutaEvaluacionComponent', () => {
  let component: RutaEvaluacionComponent;
  let fixture: ComponentFixture<RutaEvaluacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaEvaluacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEvaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaPeliculaNuevoComponent } from './ruta-pelicula-nuevo.component';

describe('RutaPeliculaNuevoComponent', () => {
  let component: RutaPeliculaNuevoComponent;
  let fixture: ComponentFixture<RutaPeliculaNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaPeliculaNuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaPeliculaNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

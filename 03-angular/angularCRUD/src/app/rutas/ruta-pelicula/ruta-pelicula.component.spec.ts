import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaPeliculaComponent } from './ruta-pelicula.component';

describe('RutaPeliculaComponent', () => {
  let component: RutaPeliculaComponent;
  let fixture: ComponentFixture<RutaPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaPeliculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

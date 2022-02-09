import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaPeliculaInfoComponent } from './ruta-pelicula-info.component';

describe('RutaPeliculaInfoComponent', () => {
  let component: RutaPeliculaInfoComponent;
  let fixture: ComponentFixture<RutaPeliculaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaPeliculaInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaPeliculaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

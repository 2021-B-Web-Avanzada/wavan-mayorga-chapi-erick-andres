import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaLetraComponent } from './ruta-letra.component';

describe('RutaLetraComponent', () => {
  let component: RutaLetraComponent;
  let fixture: ComponentFixture<RutaLetraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaLetraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaLetraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

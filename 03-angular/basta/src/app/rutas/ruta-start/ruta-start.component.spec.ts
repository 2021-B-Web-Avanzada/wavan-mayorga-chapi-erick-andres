import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaStartComponent } from './ruta-start.component';

describe('RutaStartComponent', () => {
  let component: RutaStartComponent;
  let fixture: ComponentFixture<RutaStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

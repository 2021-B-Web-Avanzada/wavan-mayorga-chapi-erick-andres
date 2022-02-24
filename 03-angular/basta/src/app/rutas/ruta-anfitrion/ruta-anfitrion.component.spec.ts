import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaAnfitrionComponent } from './ruta-anfitrion.component';

describe('RutaAnfitrionComponent', () => {
  let component: RutaAnfitrionComponent;
  let fixture: ComponentFixture<RutaAnfitrionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaAnfitrionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaAnfitrionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

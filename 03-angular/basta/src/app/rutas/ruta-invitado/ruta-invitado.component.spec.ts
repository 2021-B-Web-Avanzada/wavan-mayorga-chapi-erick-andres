import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaInvitadoComponent } from './ruta-invitado.component';

describe('RutaInvitadoComponent', () => {
  let component: RutaInvitadoComponent;
  let fixture: ComponentFixture<RutaInvitadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaInvitadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaInvitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

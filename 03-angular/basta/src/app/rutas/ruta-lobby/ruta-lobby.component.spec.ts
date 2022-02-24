import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaLobbyComponent } from './ruta-lobby.component';

describe('RutaLobbyComponent', () => {
  let component: RutaLobbyComponent;
  let fixture: ComponentFixture<RutaLobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaLobbyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaLobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

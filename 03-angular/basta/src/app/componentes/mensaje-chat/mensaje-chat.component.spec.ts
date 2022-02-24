import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeChatComponent } from './mensaje-chat.component';

describe('MensajeChatComponent', () => {
  let component: MensajeChatComponent;
  let fixture: ComponentFixture<MensajeChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajeChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajeChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

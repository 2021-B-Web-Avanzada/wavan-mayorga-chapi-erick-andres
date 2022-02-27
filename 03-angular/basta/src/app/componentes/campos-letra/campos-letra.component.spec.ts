import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamposLetraComponent } from './campos-letra.component';

describe('CamposLetraComponent', () => {
  let component: CamposLetraComponent;
  let fixture: ComponentFixture<CamposLetraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamposLetraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamposLetraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMicrosfotComponent } from './home-microsfot.component';

describe('HomeMicrosfotComponent', () => {
  let component: HomeMicrosfotComponent;
  let fixture: ComponentFixture<HomeMicrosfotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMicrosfotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMicrosfotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

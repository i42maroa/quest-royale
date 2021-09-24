import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedGameComponent } from './generated-game.component';

describe('GeneratedGameComponent', () => {
  let component: GeneratedGameComponent;
  let fixture: ComponentFixture<GeneratedGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratedGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratedGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

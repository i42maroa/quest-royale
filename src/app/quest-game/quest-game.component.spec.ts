import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestGameComponent } from './quest-game.component';

describe('QuestGameComponent', () => {
  let component: QuestGameComponent;
  let fixture: ComponentFixture<QuestGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

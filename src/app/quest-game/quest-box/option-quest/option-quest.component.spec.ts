import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionQuestComponent } from './option-quest.component';

describe('QuestComponent', () => {
  let component: OptionQuestComponent;
  let fixture: ComponentFixture<OptionQuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionQuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

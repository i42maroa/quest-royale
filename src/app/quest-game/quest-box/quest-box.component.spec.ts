import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestBoxComponent } from './quest-box.component';

describe('QuestsComponent', () => {
  let component: QuestBoxComponent;
  let fixture: ComponentFixture<QuestBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GeneratedGameService } from './generated-game.service';

describe('GeneratedGameService', () => {
  let service: GeneratedGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneratedGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

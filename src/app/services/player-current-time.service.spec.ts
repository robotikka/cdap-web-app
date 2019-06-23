import { TestBed } from '@angular/core/testing';

import { PlayerCurrentTimeService } from './player-current-time.service';

describe('PlayerCurrentTimeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerCurrentTimeService = TestBed.get(PlayerCurrentTimeService);
    expect(service).toBeTruthy();
  });
});

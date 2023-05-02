import { TestBed } from '@angular/core/testing';

import { CardsBicycleService } from './cards-bicycle.service';

describe('CardsBicycleService', () => {
  let service: CardsBicycleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsBicycleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

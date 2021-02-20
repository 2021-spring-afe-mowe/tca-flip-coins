import { TestBed } from '@angular/core/testing';

import { TcaFlipCoinsService } from './tca-flip-coins.service';

describe('TcaFlipCoinsService', () => {
  let service: TcaFlipCoinsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TcaFlipCoinsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

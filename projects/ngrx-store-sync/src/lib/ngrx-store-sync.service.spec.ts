import { TestBed } from '@angular/core/testing';

import { NgrxStoreSyncService } from './ngrx-store-sync.service';

describe('NgrxStoreSyncService', () => {
  let service: NgrxStoreSyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgrxStoreSyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

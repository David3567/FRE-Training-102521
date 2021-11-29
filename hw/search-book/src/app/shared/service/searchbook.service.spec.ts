import { TestBed } from '@angular/core/testing';

import { SearchbookService } from './searchbook.service';

describe('SearchbookService', () => {
  let service: SearchbookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchbookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

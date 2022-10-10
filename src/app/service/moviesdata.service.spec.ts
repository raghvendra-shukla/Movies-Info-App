import { TestBed } from '@angular/core/testing';

import { MoviesdataService } from './moviesdata.service';

describe('MoviesdataService', () => {
  let service: MoviesdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { MoviesdbService } from './movies.service';

describe('MoviesdbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesdbService = TestBed.get(MoviesdbService);
    expect(service).toBeTruthy();
  });
});

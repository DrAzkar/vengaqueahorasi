import { TestBed } from '@angular/core/testing';

import { HttpPokemonFrontdeskService } from './http-pokemon-frontdesk.service';

describe('HttpPokemonFrontdeskService', () => {
  let service: HttpPokemonFrontdeskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpPokemonFrontdeskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

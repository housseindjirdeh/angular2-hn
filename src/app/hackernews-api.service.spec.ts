/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HackernewsApiService } from './hackernews-api.service';

describe('Service: HackernewsApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HackernewsApiService]
    });
  });

  it('should ...', inject([HackernewsApiService], (service: HackernewsApiService) => {
    expect(service).toBeTruthy();
  }));
});

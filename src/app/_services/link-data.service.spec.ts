import { TestBed, inject } from '@angular/core/testing';

import { LinkDataService } from './link-data.service';

describe('LinkDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LinkDataService]
    });
  });

  it('should be created', inject([LinkDataService], (service: LinkDataService) => {
    expect(service).toBeTruthy();
  }));
});

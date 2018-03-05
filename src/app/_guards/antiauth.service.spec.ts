import { TestBed, inject } from '@angular/core/testing';

import { AntiauthService } from './antiauth.service';

describe('AntiauthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AntiauthService]
    });
  });

  it('should be created', inject([AntiauthService], (service: AntiauthService) => {
    expect(service).toBeTruthy();
  }));
});

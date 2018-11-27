import { TestBed, inject } from '@angular/core/testing';

import { BooklistService } from './booklist.service';

describe('BooklistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooklistService]
    });
  });

  it('should be created', inject([BooklistService], (service: BooklistService) => {
    expect(service).toBeTruthy();
  }));
});

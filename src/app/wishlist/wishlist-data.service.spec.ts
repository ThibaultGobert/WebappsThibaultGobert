import { TestBed, inject } from '@angular/core/testing';

import { WishlistDataService } from './wishlist-data.service';

describe('WishlistDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WishlistDataService]
    });
  });

  it('should be created', inject([WishlistDataService], (service: WishlistDataService) => {
    expect(service).toBeTruthy();
  }));
});

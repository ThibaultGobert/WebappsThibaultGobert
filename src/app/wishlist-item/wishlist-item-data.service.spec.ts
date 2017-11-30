import { TestBed, inject } from '@angular/core/testing';

import { WishlistItemDataService } from './wishlist-item-data.service';

describe('WishlistItemDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WishlistItemDataService]
    });
  });

  it('should be created', inject([WishlistItemDataService], (service: WishlistItemDataService) => {
    expect(service).toBeTruthy();
  }));
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWishlistItemComponent } from './add-wishlist-item.component';

describe('AddWishlistItemComponent', () => {
  let component: AddWishlistItemComponent;
  let fixture: ComponentFixture<AddWishlistItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWishlistItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWishlistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

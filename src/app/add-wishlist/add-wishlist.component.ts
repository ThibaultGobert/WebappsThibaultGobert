import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Wishlist} from '../wishlist/wishlist.model';
import {WishlistItem} from '../wishlist-item/wishlistItem.model';
import {WishlistDataService} from '../wishlist/wishlist-data.service';
import {FormGroup, FormControl, Validators, FormBuilder, FormArray} from '@angular/forms';

import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-add-wishlist',
  templateUrl: './add-wishlist.component.html',
  styleUrls: ['./add-wishlist.component.css']
})
export class AddWishlistComponent implements OnInit {
  @Output() public newWishlist = new EventEmitter<Wishlist>();
  private _wishlist: FormGroup;

  constructor(private fb: FormBuilder, private _wishlistDataService : WishlistDataService){

  }

  get wishlistItems(): FormArray{
    return <FormArray> this._wishlist.get('wishlistItems');
  }

  ngOnInit() {
    this._wishlist = this.fb.group({
      name : ['', [Validators.required, Validators.minLength(2)]],
      wishlistItems: this.fb.array([ this.createWishlistItems()]) 
    });
    
    this.wishlistItems.statusChanges.debounceTime(400).distinctUntilChanged().subscribe(data => {
      if (data === 'VALID'){
        this.wishlistItems.push(this.createWishlistItems());
      }
    })
  }

  createWishlistItems() : FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]]
    });
  }
  
  get wishlist(){
    return this._wishlist;
  }

  
  onSubmit(){
    const wishlist = new Wishlist(this._wishlist.value.name);
    for(const wishlistItem of this._wishlist.value.wishlistItems) {
      if( wishlistItem.name.length >2){
        wishlist.addWishlistItem(new WishlistItem(wishlistItem.name));
        console.log(this._wishlist.value.name);
        console.log(this._wishlist.value.wishlistItems);
      }
    }
    this._wishlistDataService.addNewWishlist(wishlist).subscribe(item => {
      const wlItem = wishlist.wishlistItems.map( it => 
        this._wishlistDataService.addNewWishlistItem(it, item));

      Observable.forkJoin(...wlItem).subscribe(( wishlistItems: WishlistItem[]) => {
        for( const wishlistItem of wishlistItems){
          item.addWishlistItem(wishlistItem);

        }
      })  
    })
   // this.newWishlist.emit(wishlist);
  }

  /*
  addWishlist(newWishlistName : HTMLInputElement) : boolean {
      this._wishlist.name = newWishlistName.value;
      this.newWishlist.emit(this._wishlist);
      return false;
    }
*/


}

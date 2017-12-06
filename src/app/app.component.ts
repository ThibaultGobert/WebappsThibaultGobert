import { Component, OnInit, OnDestroy } from '@angular/core';
import {WishlistDataService} from './wishlist/wishlist-data.service';
import {Wishlist} from './wishlist/wishlist.model';
import {Observable} from 'rxjs/Rx';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WishlistDataService]
})

export class AppComponent implements OnInit{

  constructor(){
    
  }

 ngOnInit(){

 }

 


 
}

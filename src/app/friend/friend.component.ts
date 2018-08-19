import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../user/authentication.service';
import { Http, Response, Headers} from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { WishlistDataService } from '../wishlist/wishlist-data.service';


@Component({
  selector: 'friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
public _friends;
public _currentUser;
public _registeredUsers;
public _showRegistered;

  constructor(private http: Http, private _authenticationService : AuthenticationService, private _wishlistDataService : WishlistDataService) {
   }

  ngOnInit() {
     this._currentUser = JSON.parse(localStorage.getItem('currentUser'));
     console.log("user: " + this._currentUser);
     console.log("friends: " + this._currentUser.friends);

     this._friends = this._currentUser.friends==undefined? new Array<string>(): this._currentUser.friends;
     this._registeredUsers = new Array<string>();
  }

  showRegistered(){
    this.http.get(`/API/user/`).map(response => response.json().map( item => {
      if(!this._registeredUsers.includes(item.username)){
      this._registeredUsers.push(item.username);
      }
    }
    )).subscribe();
    this._showRegistered=!this._showRegistered;
  }

  addFriend(user: string){
    if(!this._friends.includes(user)){
      this._friends.push(user);
    }
  }
  removeFriend(friend: string){
    this._friends.forEach((item, index) => {
      if(item === friend) this._friends.splice(index,1);
    });
  }



}

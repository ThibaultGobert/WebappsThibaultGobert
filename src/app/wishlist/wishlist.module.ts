import {NgModule} from '@angular/core';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishlistItemComponent } from './wishlist-item/wishlist-item.component';
import { WishlistListComponent } from './wishlist-list/wishlist-list.component';
import { AddWishlistComponent } from './add-wishlist/add-wishlist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { WishlistDataService } from './wishlist-data.service';
import { RouterModule } from '@angular/router';
import { AddWishlistItemComponent } from './add-wishlist-item/add-wishlist-item.component';
import { WishlistDetailComponent } from './wishlist-detail/wishlist-detail.component';
import { WishlistResolver } from './wishlist-resolver.service';


const routes= [
    { path: 'list', component: WishlistListComponent},
    { path: 'add', component: AddWishlistComponent},
    { path: ':id', component: WishlistDetailComponent,
        resolve: { wishlist: WishlistResolver}}
];

@NgModule({
    imports:[
        HttpModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        WishlistComponent,
        WishlistItemComponent,
        AddWishlistItemComponent,
        AddWishlistComponent,
        WishlistListComponent,
        WishlistDetailComponent
    ],
    providers: [ WishlistDataService,
    WishlistResolver]
})
export class WishlistModule {}
import { ProfileResolver } from './services/profle.resolver';
import { FollowersComponent } from './core/followers/followers.component';
import { ProfileComponent } from './core/profile/profile.component';
import { OffersComponent } from './core/offers/offers.component';
import { NewOfferComponent } from './core/new-offer/new-offer.component';
import { HomeComponent } from './core/home/home.component';
import { AppComponent } from './app.component';
import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { CommonModule } from '@angular/common';
import { MyOrdersComponent } from './core/my-orders/my-orders.component';
import { OfferEditComponent } from './core/offer-edit/offer-edit.component';
import { OfferResolver } from './services/offer.resolver.service';
import { SchoolHomeComponent } from './core/school-home/school-home.component';





const appRoutes : Routes = [
    {path:'', component: HomeComponent, children: [
        {path:'offers/new', component:NewOfferComponent},
        {path:'offers/see', component:OffersComponent},
        {path:'profile', component:ProfileComponent , resolve: {profile: ProfileResolver}},
        {path:'followers', component:FollowersComponent},
        {path:'my-orders', component:MyOrdersComponent},
        {path:'offers/:id/edit', component:OfferEditComponent, resolve: {offer: OfferResolver}}



    ]},
    {path:'school', component:SchoolHomeComponent}
]

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule {

}
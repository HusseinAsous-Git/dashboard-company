import { SchoolService } from './services/school.service';
import { ProfileResolver } from './services/profle.resolver';
import { OfferResolver } from './services/offer.resolver.service';
import { ProfileService } from './services/profile.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CompanyService } from "./services/company.service";
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { HomeComponent } from './core/home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { NewOfferComponent } from './core/new-offer/new-offer.component';
import { OffersComponent } from './core/offers/offers.component';
import { ProfileComponent } from './core/profile/profile.component';
import { FollowersComponent } from './core/followers/followers.component';
import { MyOrdersComponent } from './core/my-orders/my-orders.component';
import{ ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OfferEditComponent } from './core/offer-edit/offer-edit.component';
import { SchoolProfileService } from './services/school.profile.service';
import { SchoolHomeComponent } from './core/school-home/school-home.component';
import { SchoolHeaderComponent } from './core/school-header/school-header.component';
import { SchoolSidebarComponent } from './core/school-sidebar/school-sidebar.component';


@NgModule({
    declarations:[
    SidebarComponent,
    HomeComponent,
    HeaderComponent,
    NewOfferComponent,
    OffersComponent,
    ProfileComponent,
    FollowersComponent,
    MyOrdersComponent,
    OfferEditComponent,
    SchoolHomeComponent,
    SchoolHeaderComponent,
    SchoolSidebarComponent
    ],
    providers:[
        CompanyService,
        ProfileService,
        OfferResolver,
        SchoolProfileService,
        ProfileResolver,
        SchoolService
    ],
    imports:[
        CommonModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        
    ],
    exports:[
        AppRoutingModule
    ]
})

export class CoreModule {

}
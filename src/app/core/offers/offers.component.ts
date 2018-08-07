import { PageModel } from './../../models/page.model';
import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { CompanyOfferModel } from '../../models/company.offer.see.model';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';


@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  constructor(private companyService: CompanyService, private router:Router, private activatedRoute:ActivatedRoute) { }

  public companyOffers : CompanyOfferModel []=[] ;

  ngOnInit() {
    this.companyService.seeAllOffers().subscribe(
      (response) => {
        console.log("Response: " + response)
        this.companyOffers = response;
        console.log(this.companyOffers);
      },
      (err) => console.log("Error: " + err)
    );
  }


  // this method is under test

  deleteOffer(data: CompanyOfferModel, index : number) {
    
    console.log("record deleted successfully !") ; 
     
     this.companyService.deleteOffer(data.offer_id).subscribe(
       res =>{
         this.companyOffers.splice(index,1);
        console.log("record deleted successfully !") ; 
         this.router.navigate(["../see"], {relativeTo:this.activatedRoute});
      }
       , 
       err => {
         console.log(err) ;
       }
     ) ; 
  }

  


}

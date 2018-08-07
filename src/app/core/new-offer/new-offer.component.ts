import { HeaderComponent } from './../header/header.component';
import { CompanyService } from './../../services/company.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../../node_modules/@angular/forms';
import { CompanyNewOfferModel } from '../../models/company.offer.new.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.css']
})
export class NewOfferComponent implements OnInit {

  base64textString = [];
hash = [];
  newOffer: FormGroup;

   constructor(private companyService: CompanyService, private router: Router ) { }

  ngOnInit() {
    this.newOffer = new FormGroup({
      'offerName' : new FormControl(null, Validators.required),
      'description' : new FormControl(null, Validators.required),
      'cost' : new FormControl(null, Validators.required),
      'count' : new FormControl(null, Validators.required),
     
      'image_one' : new FormControl(null, Validators.required)
    });
    console.log("Date is:  "+ Date.now()+ "is of type: "+ typeof(new Date()));

  }


  

  onUploadChange(evt: any) {
    const file = evt.target.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }
  
  handleReaderLoaded(e) {
    this.hash.push( btoa(e.target.result));
    this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
  }




  onSubmit(){
    
    console.log("String Hash: "+ this.hash);

    
    
    let offer : CompanyNewOfferModel  = {
      image_one: this.hash[0],
      image_two: this.hash[1],
      image_third: this.hash[2],
      image_four: this.hash[3],
      offer_title: this.newOffer.get('offerName').value,
      offer_explaination: this.newOffer.get('description').value,
      offer_cost: this.newOffer.get('cost').value,
      offer_count: this.newOffer.get('count').value,
      offer_display_date:Date.now(),
      offer_expired_date:Date.now(),
      offer_deliver_date:Date.now(),
      company_id:6
    }

    // console.log("Offer Title: " + this.newOffer.get('offerName').value + " is of type ("+typeof(this.newOffer.get('offerName').value)+ ")");
    // console.log("Offer Explanation: " + this.newOffer.get('description').value + " is of type ("+typeof(this.newOffer.get('description').value)+ ")");
    // console.log("Offer Cost: " + this.newOffer.get('cost').value + " is of type ("+typeof(this.newOffer.get('cost').value)+ ")");
    // console.log("Offer Count: " + this.newOffer.get('count').value + " is of type ("+typeof(this.newOffer.get('count').value)+ ")");
    // console.log("date is:" + this.newOffer.get('display_date').value);
    
    // console.log("Image is of type : " + typeof(this.base64textString))
    
    console.log('title: ' + offer.offer_title)

    this.companyService.addOffer(offer).subscribe(
      (response) => {
        console.log(response);
        
        this.router.navigate(['/offers/see']);
      }
      ,(err) => console.log(err)
    );

  

  }


}

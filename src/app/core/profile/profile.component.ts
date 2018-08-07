import { CompanyProfileModel } from './../../models/company.profile.model';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { CompanyOfferModel } from '../../models/company.offer.see.model';
import { FormGroup, FormControl, Validators } from '../../../../node_modules/@angular/forms';
import { ActivatedRoute, Data, Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  public profileForm: FormGroup;
  private activeProfile : CompanyProfileModel ;

  private currentProfile: CompanyOfferModel [];


  srcLogo: string;
  srcCover: string;
  hashLogo: string;
  hashCover: string

  constructor(private profileService: ProfileService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    

    this.profileForm = new FormGroup({
      'companyName': new FormControl(null, Validators.required),
      'link': new FormControl(null, Validators.required),
      'phone': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
      'website': new FormControl(null, Validators.required),
      'logo': new FormControl(null, Validators.required),
      'cover': new FormControl(null, Validators.required)
    });


    

    this.profileService.getProfile(6).subscribe(
      (response) => { 
        this.activeProfile = response;
        this.srcLogo = 'data:image/png;base64,' + this.activeProfile.company_logo_image;
        this.srcCover = 'data:image/png;base64,' + this.activeProfile.company_cover_image;
        console.log("Active profile");
        console.log(this.activeProfile)

        this.profileForm = new FormGroup({
          'companyName': new FormControl(this.activeProfile.company_name, Validators.required),
          'link': new FormControl(this.activeProfile.company_link_youtube, Validators.required),
          'phone': new FormControl(this.activeProfile.company_phone_number, Validators.required),
          'address': new FormControl(this.activeProfile.company_address, Validators.required),
          'website': new FormControl(this.activeProfile.company_website_url, Validators.required)
        });
    



      }
    );

 
   
   
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
     this.hashLogo = btoa(e.target.result);
      this.srcLogo = 'data:image/png;base64,' + btoa(e.target.result);
    }
  
  
    onUploadChangeCover(evt: any) {
      const file = evt.target.files[0];
    
      if (file) {
        const reader = new FileReader();
    
        reader.onload = this.handleReaderLoadedCover.bind(this);
        reader.readAsBinaryString(file);
      }
    }


    handleReaderLoadedCover(e) {
     this.hashCover =  btoa(e.target.result);
      this.srcCover = 'data:image/png;base64,' + btoa(e.target.result);
    }




    updateProfile(){

      // this.profileForm = new FormGroup({
      //   'companyName': new FormControl(this.activeProfile.company_name, Validators.required),
      //   'link': new FormControl(this.activeProfile.company_link_youtube, Validators.required),
      //   'phone': new FormControl(this.activeProfile.company_phone_number, Validators.required),
      //   'address': new FormControl(this.activeProfile.company_address, Validators.required),
      //   'website': new FormControl(this.activeProfile.company_website_url, Validators.required),
      //   'logo': new FormControl(this.hashLogo, Validators.required),
      //   'cover': new FormControl(this.hashCover, Validators.required)
      // });


      
      let data  = {
        company_id : 6,
        company_name: this.profileForm.get('companyName').value,
        company_logo_image: this.hashLogo == null ? this.activeProfile.company_logo_image : this.hashLogo,
        company_address: this.profileForm.get('address').value, 
        company_link_youtube: this.profileForm.get('link').value,
        company_website_url: this.profileForm.get('website').value,
        company_cover_image: this.hashCover == null ? this.activeProfile.company_cover_image : this.hashCover,
        company_phone_number: this.profileForm.get('phone').value
      }


      console.log("Name: " + data.company_name + " is of type: "+ typeof(data.company_name));
      console.log("Logo: " + data.company_logo_image + " is of type: "+ typeof(data.company_logo_image));
      console.log("Address: " + data.company_address + " is of type: "+ typeof(data.company_address));
      console.log("Link: " + data.company_link_youtube + " is of type: "+ typeof(data.company_link_youtube));
      console.log("website: " + data.company_website_url + " is of type: "+ typeof(data.company_website_url));
      console.log("cover: " + data.company_cover_image + " is of type: "+ typeof(data.company_cover_image));
      console.log("phone: " + data.company_phone_number + " is of type: "+ typeof(data.company_phone_number));

      this.profileService.updateProfile(data).subscribe(

        response => {
          console.log("Succeeded" + response); 
          this.router.navigate(['/']);
        },
        err => console.log("Error: "+err)

      )

    }

}

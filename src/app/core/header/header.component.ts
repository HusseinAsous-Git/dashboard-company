import { ProfileService } from './../../services/profile.service';
import { CompanyService } from './../../services/company.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: string;
  constructor(private profileService: ProfileService) { }

  ngOnInit() {

    this.profileService.getProfile(6).subscribe(
      response => {
        console.log(response);
        this.name = response.company_name;
      }
    )
  }

}

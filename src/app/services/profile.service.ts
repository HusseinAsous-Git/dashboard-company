import { CompanyProfileModel } from './../models/company.profile.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '../../../node_modules/@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ProfileService{

    constructor(private httpClient: HttpClient){}


    getProfile(id:number){
        let url = `${environment.apiPath}profile/get/${id}`;
        return this.httpClient.get<CompanyProfileModel>(url);
    }


    updateProfile(data : CompanyProfileModel) { 
        
        let url = `${environment.apiPath}profile/updates `; 
        return this.httpClient.put<CompanyProfileModel>(url,data) ; 
    }




}
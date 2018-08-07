import { SchoolOrdersModel } from './../models/school.orders.model';
import { SchoolProfileModel } from './../models/school.profile.model';
import { HttpClient } from '@angular/common/http';
import {  Injectable } from "../../../node_modules/@angular/core";
import { environment } from '../../environments/environment';

@Injectable()
export class SchoolService{

        constructor(private httpClient: HttpClient) {}

getSchools(id: number){
    let url = `${environment.apiPath}follow/get/followers/${id}`;
        return this.httpClient.get<SchoolProfileModel []>(url); 
}

getOrders(companyId: number){
    let url = `${environment.apiPath}orders/${companyId}`;
        return this.httpClient.get<SchoolOrdersModel []>(url); 
}

}
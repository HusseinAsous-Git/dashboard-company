import { ProfileService } from './profile.service';
import { Injectable } from "../../../node_modules/@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '../../../node_modules/@angular/router';
import { CompanyProfileModel } from '../models/company.profile.model';
import { Observable } from '../../../node_modules/rxjs';




@Injectable()
export class ProfileResolver{

    constructor(private profileService: ProfileService) {}

    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot)
    : Observable<CompanyProfileModel> | Promise<CompanyProfileModel> | CompanyProfileModel {
        return this.profileService.getProfile(3).toPromise().then(
            data => data
        ).catch(
            err => err
        )   
    }

}
import { CompanyNewOfferModel } from './../models/company.offer.new.model';
import { CompanyService } from './company.service';
import { CompanyOfferModel } from './../models/company.offer.see.model';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "../../../node_modules/@angular/router";
import { Injectable } from '../../../node_modules/@angular/core';
import { Observable } from '../../../node_modules/rxjs';

@Injectable()
export class OfferResolver implements Resolve<CompanyNewOfferModel>{

    constructor(private companyService: CompanyService) {}

    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot)
    : Observable<CompanyNewOfferModel> | Promise<CompanyNewOfferModel> | CompanyNewOfferModel {
        return this.companyService.getOffer(+activatedRouteSnapshot.params['id']).toPromise().then(
            data => data
        ).catch(
            err => err
        )   
    }

} 
import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

import { WPService } from '../../../providers/wp.service';
import { NotificationHelper } from '../../../providers/notification.helper';

import { Service } from '../../service/service';

@Component({
    selector: 'celebrity-items',
    templateUrl: 'items.html'
})
export class Items {

	celebrity: any;
	category: any;
	services: any = [];
	vendors: any = [];
	browse_by: string = 'product';

	active_view: string = 'products';

	constructor(
        private navParams: NavParams,
        private wpService: WPService,
        private navCtrl: NavController,
        private notification: NotificationHelper
    ){
		this.celebrity = navParams.get('celebrity');
		this.category = navParams.get('category');
		// this.notification.showLoading();
		// wpService.getCelebrityServices(this.celebrity.id, this.category.term_id).subscribe( result => {
		// 	this.services = result;
		// 	this.notification.stopLoading();
		// } )
		this.browseByProduct();
	}

	showService(service){
		this.navCtrl.push( Service, { service: service, celebrity_id: this.celebrity.id } )
	}

	browseByProduct(){
		this.notification.showLoading();
		this.wpService.getCelebrityServices(this.celebrity.id, this.category.term_id).subscribe( result => {
			this.services = result;
			this.browse_by = 'product';
			this.active_view = 'products';
			this.notification.stopLoading();
		} )
	}

	browseByVendor(){
		this.notification.showLoading();
		this.wpService.getCelebVendors(this.celebrity.id, this.category.term_id).subscribe( result => {
			this.vendors = result;
			this.browse_by = 'vendor';
			this.active_view = 'vendors';
			this.notification.stopLoading();
		} )
	}

	byVendor(vendor){
		this.notification.showLoading();
		this.wpService.getCelebrityServicesByVendor(this.celebrity.id, this.category.term_id, vendor.id).subscribe( result => {
			this.services = result;
			this.browse_by = 'vendor';
			this.active_view = 'products';
			this.notification.stopLoading();
		} )
	}

}
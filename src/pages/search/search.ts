import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WPService } from '../../providers/wp.service';
import { NotificationHelper } from '../../providers/notification.helper';

import { Service } from '../service/service';
import { Services } from '../services/services';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class Search {

	services: any[];
	categories:any;
	constructor(
		public navCtrl: NavController, 
	  	public navParams: NavParams,
	  	private notification: NotificationHelper,
	  	private wpService: WPService
	){

		this.categories = this.wpService.getCategories();
		// this.notification.showLoading();
		// this.wpService.searchServices({area: this.navParams.get('area'), s: this.navParams.get('s')}).subscribe( services => {
		// 	// this.cart_total = res.count;
		// 	this.services = services;
		// 	this.notification.stopLoading();
		// } )	

	}

	showService(service){
	  	this.notification.showLoading();
		  this.navCtrl.push(Service, { service: service });
	}

	getServices(category){
		this.navCtrl.push(Services,{ category: category, search : this.navParams.get('area')});
	}

}
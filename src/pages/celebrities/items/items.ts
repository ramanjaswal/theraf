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
	constructor(
        private navParams: NavParams,
        private wpService: WPService,
        private navCtrl: NavController,
        private notification: NotificationHelper
    ){
		this.celebrity = navParams.get('celebrity');
		this.category = navParams.get('category');
		this.notification.showLoading();
		wpService.getCelebrityServices(this.celebrity.id, this.category.term_id).subscribe( result => {
			this.services = result;
			this.notification.stopLoading();
		} )
	}

	showService(service){
		this.navCtrl.push( Service, { service: service, celebrity_id: this.celebrity.id } )
	}

}
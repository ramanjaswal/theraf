import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WPService } from '../../providers/wp.service';
import { NotificationHelper } from '../../providers/notification.helper';

import { Payment } from '../payment/payment';

@Component({
  selector: 'page-review',
  templateUrl: 'review.html'
})
export class Review {

	cart: any;
	is_loaded: any = false;

	constructor(
		public navCtrl: NavController, 
		private notification: NotificationHelper,
		private wpService: WPService
	) {

		this.cart = {};

		this.notification.showLoading();
		this.wpService.getMyCart().subscribe( cart =>{
	      this.cart = cart;
	      this.notification.stopLoading();

	      this.is_loaded = true;

	    } );

	}

	saveOrder(){

		this.notification.showLoading();
		this.wpService.saveOrder().subscribe( response => {
			//console.log( response );
			this.notification.stopLoading();
			if(response.status){
				this.navCtrl.push(Payment, { order_id: response.order_id });
			}else{
				this.notification.showToast( response.message );
			}
		} );

	}
	
}
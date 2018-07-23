import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WPService } from '../../providers/wp.service';
import { NotificationHelper } from '../../providers/notification.helper';


import { Review } from '../review/review';
import { Home } from '../home/home';

@Component({
  selector: 'page-payment-success',
  templateUrl: 'payment_success.html'
})
export class PaymentSuccess {

	data: any;

	constructor(
		public navCtrl: NavController, 
		private notification: NotificationHelper,
		private wpService: WPService,
		private params: NavParams
	) {

		//notification.stopLoading();
		this.data = this.params.get('data');

		console.log( this.data );

		localStorage.removeItem('cart_id');

	}

	goBack(){

		this.navCtrl.setRoot(Home,{},{
			animate: true,
			animation: 'md-transition',
			direction: 'back'
		});

	}

}

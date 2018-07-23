import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WPService } from '../../providers/wp.service';
import { NotificationHelper } from '../../providers/notification.helper';

import { Review } from '../review/review';
import { PaymentSuccess } from '../payment_success/payment_success';

import { Home } from '../home/home';

declare var cordova: any;
declare var window: any;

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html'
})
export class Payment {


	paymentMethod: any = 1;
	enableOffline: boolean = true;
	enableHomePayment: boolean = true;

	constructor(
		public navCtrl: NavController, 
		private notification: NotificationHelper,
		private wpService: WPService,
		private params: NavParams
	) {

		//notification.stopLoading();
		notification.showLoading();
		this.wpService.availablePaymentMethods( this.params.get('order_id') )
			.subscribe( response => {
				notification.stopLoading();
				// console.log(response);
				this.enableOffline = response.offline;
				this.enableHomePayment = response.home_payment;
			} )

	}

	selectPaymentMethod(method){
		this.paymentMethod = method;
	}

	confirmOrder(){

		this.notification.showLoading();
		this.wpService.processPayment( {order: this.params.get('order_id'), payment_method: this.paymentMethod} ).subscribe( response => {

			//console.log(response);
			this.notification.stopLoading();
			if( this.paymentMethod == 1 && response.status == true ){


				//var ref = window.open( response.url );

				//var ref = window.open( response.url , '_blank', 'toolbarposition=top,location=no');
				var ref = cordova.InAppBrowser.open( response.url , '_blank', 'toolbarposition=top,location=yes');
				
				ref.addEventListener('exit', () => {

					this.navCtrl.setRoot(Home,{},{
						animate: true,
						animation: 'md-transition',
						direction: 'back'
					});

				});

			}else{

				this.navCtrl.push(PaymentSuccess, { data: response });

			}

			if(response.status == false){
				this.notification.showToast(response.message);
				return false;
			}

		});

	}

}
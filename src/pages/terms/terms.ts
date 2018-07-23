import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { WPService } from '../../providers/wp.service';
import { NotificationHelper } from '../../providers/notification.helper';

import { Cart } from '../cart/cart';
import { Events } from 'ionic-angular';

//declare var $: any;

@Component({
  selector: 'page-terms',
  templateUrl: 'terms.html'
})
export class Terms {


	page: any = {};
	showAgree: boolean = false;
	user: any;
	is_loading: boolean = true;
	user_type: any;

	constructor(
		public viewCtrl: ViewController, 
		private wpService: WPService, 
		private notification: NotificationHelper,
		private navParams: NavParams,
		private navCtrl: NavController,
		public events: Events){

		notification.showLoading();
		this.wpService.getPage(313).subscribe( (page) => {
			this.page = page;
			notification.stopLoading();
			this.is_loading = false;
		})

		this.showAgree = this.navParams.get('showAgree');
		this.user = this.navParams.get('user');
		this.user_type = this.navParams.get('type');
	}

	doRegister(){
		this.dismiss();
		this.notification.showLoading();

		if(this.user_type == 'customer'){

			this.wpService.registerCustomer( this.user )
				.then(response => { 

					this.notification.stopLoading();
					//console.log(response);
					this.notification.showToast( response.message )

					if( response.success ){
						this.events.publish('user:created', response);
					}


				}).catch( err => { 

					this.notification.stopLoading();
					console.log(err);

					this.notification.showToast( "Error connecting to server. Please try again" );
					//this.dismiss();
				})
		}
		if(this.user_type == 'vendor'){
			//alert("WORKING")
			console.log(this.user);
			this.wpService.registerVendor( this.user )
				.then(response => {
					this.notification.stopLoading();
					this.notification.showToast( response.message );
					if( response.success ){
						this.events.publish('vendor:created', response);
					}
				}).catch( err => { 

					this.notification.stopLoading();
					console.log(err);

					this.notification.showToast( "Error connecting to server. Please try again" );
					//this.dismiss();
				})
		}
	}
	
	dismiss() {
	   this.viewCtrl.dismiss();
	}
}
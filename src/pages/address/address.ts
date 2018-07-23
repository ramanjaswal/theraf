import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { WPService } from '../../providers/wp.service';
import { NotificationHelper } from '../../providers/notification.helper';
import { AuthService } from '../../providers/auth.service';

import { Review } from '../review/review';

import LOCATIONS from '../../data/locations';

@Component({
  selector: 'page-address',
  templateUrl: 'address.html'
})
export class Address {

	address: any = {};
	is_logged_in: boolean = false;

	login : any;
	//allLocations: any = [];

	constructor(
		public navCtrl: NavController, 
		private notification: NotificationHelper,
		private wpService: WPService,
		private authService: AuthService,
		public events: Events
	) {

		this.login = {};
		this.initAddress();
		//this.allLocations = LOCATIONS;

		

		//console.log( this.address.city );
	}

	initAddress(){
		let user = JSON.parse( localStorage.getItem('user') );

		if(user != null){ // if user logged in
			this.is_logged_in = true;

			this.notification.showLoading();

			this.wpService.myAddress().subscribe( address => {
				this.notification.stopLoading();
				this.address = address;

				//override city with the shiping city selected
				let location = parseInt( localStorage.getItem('delivery_location') );
				if(location > 0)
					this.address.city = LOCATIONS[ location - 1 ]; 

			} );

		}
	}

	saveAddress(){
		console.log(this.address);
		console.log(this.isValidate());
		this.address.country = "SAR";
		if( this.isValidate() ){
			
			if(this.is_logged_in){
				this.notification.showLoading();
				this.wpService.saveAddress(this.address).subscribe( response => {
					this.notification.stopLoading();
					if(response.status){
						this.navCtrl.push(Review);
					}else{
						this.notification.showToast( "Error while saving your address. Please try again." )
					}
				} );
			} else {
				if( this.address.password && this.address.password == this.address.cpassword ){
					this.notification.showLoading();
					this.wpService.registerAndCheckout(this.address).subscribe( response => {
						this.notification.stopLoading();

						if(response.success){
							// console.log(response);
							localStorage.setItem( 'user', JSON.stringify(response.user) );

							//publish login event -- user to update menu view
							this.events.publish('user:login', true);

							this.initAddress();
							this.navCtrl.push(Review);
						}else{
							this.notification.showToast( response.message );
						}

					} )
				} else {
					this.notification.showToast( 'Password and Confirm password do not match.' );
				}
			}
			
		} else {
			this.notification.showToast( 'Please fill the required fields.' );
		}

	}

	doLogin(){
		this.notification.showLoading();

		this.authService.login( this.login )
			.then(response => { 

		// 		//console.log(); 

				localStorage.setItem( 'user', JSON.stringify(response) );
				this.notification.stopLoading();
				//assign cart

				this.events.publish('user:login', true);

				this.wpService.assignCart().subscribe( response => {
					console.log("Temporay Cart Assigned to user");
				});

				this.initAddress();
			}).catch( err => { 

				this.notification.stopLoading();
				if( err.status == 403 ){
					this.notification.showToast("Invalid username or password");
					return false;
				}
				this.notification.showToast("Error connecting to server. Please try again");
				console.log( err );
			})

	}
		
	isValidate(){

		return (this.address.first_name && 
				this.address.last_name && 
				this.address.user_email &&
				this.address.mobile && 
				this.address.address && 
				this.address.province && 
				this.address.city && 
				this.address.comments);
		
	}
}
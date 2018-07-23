import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { WPService } from '../../providers/wp.service';
import { NotificationHelper } from '../../providers/notification.helper';

import { Address } from '../address/address';
import LOCATIONS from '../../data/locations';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class Cart {

	// cart_total: any;
	cart: any;
	is_loaded: any = false;

	coupon: any = '';
	coupon_discount: any = 0;
	coupon_applied: boolean = false;

	selected_location: any;

	constructor(
		public navCtrl: NavController, 
		private notification: NotificationHelper,
		private wpService: WPService,
		public alertCtrl: AlertController
	) {

		this.cart = {};

		// let coupon = localStorage.getItem('coupon');
		// let coupon_discount = localStorage.getItem('coupon_discount');
		// if(null !== coupon){
		// 	this.coupon = coupon;
		// 	this.coupon_discount = parseInt(coupon_discount);
		// 	this.coupon_applied = true;
		// }
	}

	getMyCart(){

		console.log("Getting cart content...");
		return new Promise( (resolve, reject) => {

			this.wpService.getMyCart().subscribe( cart =>{
				this.cart = cart;
				this.cart.discount = parseInt(cart.discount);
	  
				this.notification.stopLoading();
	  
				if( cart.coupon && cart.coupon !== null ){
					this.coupon = cart.coupon.coupon_code;
					this.coupon_applied = true;
				}else{
					this.coupon = '';
					this.coupon_applied = false;
				}
	  
				this.is_loaded = true;
	  
				resolve(true);

			  } );

		} )
		
	}

	changeLocation(){
		let delivery_location = localStorage.getItem('delivery_location');
		let _index = parseInt(delivery_location) - 1
		this.showLocationSelector( _index );
	}

	ionViewDidEnter(){
	    // this.wpService.getCartCount().then( response =>{
	    //   this.cart_total = response.count;
	    // } )

	    let delivery_location = localStorage.getItem('delivery_location');
	    if( delivery_location == null ){
	    	this.showLocationSelector();
	    }else{
	    	let _index = parseInt(delivery_location) - 1
	    	this.selected_location = LOCATIONS[ _index ];
	    	this.loadCart();
	    }

	}

	showLocationSelector( selectedIndex = 0 ){
		let alert = this.alertCtrl.create();
		alert.setTitle('Delivery Location');

		LOCATIONS.forEach( function(location , index){
			alert.addInput({
		      type: 'radio',
		      label: location,
		      value: (index + 1).toString(),
		      checked: index == selectedIndex
		    });
		} )
		
	    alert.addButton({
	      text: 'OK',
	      handler: data => {
	       	this.setLocation(data)
	      }
	    });
	    alert.present();
	}

	setLocation(location){
		console.log("Selected Location: " + location);
		this.selected_location = LOCATIONS[ location - 1 ];
		localStorage.setItem('delivery_location', location);
		this.loadCart()
	}

	loadCart(){
		this.notification.showLoading();
		this.getMyCart().then( ()=>{

			let deal_id = localStorage.getItem('deal');
			if(deal_id){
				this.notification.showLoading('Appying Deal...');
				this.wpService.activateDeal(deal_id)
					.subscribe( response => {
						this.notification.stopLoading();
						console.log(response);
						if(response.status){
							this.getMyCart();
						}
						this.notification.showToast(response.message);
					} )
			}

		});
	}

	removeItem(index){
		this.notification.showLoading();
		this.wpService.removeFromCart(index).subscribe( cart =>{
	      this.cart = cart;
	      this.notification.stopLoading();

	      this.is_loaded = true;

	    } );
	}

	goToAddress(){
		this.navCtrl.push( Address );
	}

	applyCoupon(){

		if(this.coupon == ''){
			return false;
		}

		this.notification.showLoading();
		this.wpService.applyCoupon( { coupon: this.coupon } ).subscribe( (result) => {

			if(result.status){

				// localStorage.setItem('coupon', this.coupon);
				// localStorage.setItem('coupon_discount', result.discount.value);
				
				// //Apply coupon discount
				// this.coupon_discount = result.discount.value;

				//this.coupon_applied = true;
				//this.notification.showLoading();
				this.getMyCart();
			}else{
				this.notification.stopLoading();
			}

			this.notification.showToast(result.message);
			//this.notification.stopLoading();
		} )
	}

	removeCoupon(){
		this.notification.showLoading();
		this.wpService.removeCoupon().subscribe( result => {

			if(result.status){
				// localStorage.removeItem('coupon');
				// localStorage.removeItem('coupon_discount');
				// this.coupon_discount = 0;
				// this.coupon = '';
				// this.coupon_applied = false;
				//this.notification.showLoading();
				this.getMyCart();
			}else{
				this.notification.stopLoading();
			}

			this.notification.showToast(result.message);
			//this.notification.stopLoading();

		} )
	}

}
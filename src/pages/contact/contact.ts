import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';
import { WPService } from '../../providers/wp.service';
import { NotificationHelper } from '../../providers/notification.helper';

import { WpPage } from '../wp-page/wp-page';
import { Search } from '../search/search';
import { Cart } from '../cart/cart';
import { Services } from '../services/services';
import { Home } from '../home/home';
import {TranslateService} from 'ng2-translate';

import { Login } from '../login/login';
import { Register } from '../register/register';

declare var cordova: any;

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class Contact {
	@ViewChild(Content) content: Content;

	contact: any;
	hideBackButton: boolean = false;
	showSearchBar: boolean = false;
	cart_total: any;
	searchTerm: any;
	language: any;

	constructor(
		public navCtrl: NavController, 
		private notification: NotificationHelper,
		private wpService: WPService,
		private params: NavParams,
		public translate: TranslateService
	) {
		this.contact = {};
		this.hideBackButton = this.params.get('hideBackButton');

		this.language = localStorage.getItem('language');
	}

	ionViewDidEnter(){
		this.wpService.getCartCount().subscribe( res => {
			this.cart_total = res.count;
		} )	
	}

	switchLanguage( lang ){
		this.language = lang;
		localStorage.setItem('language', lang);
		this.translate.use( lang );
	}

	sendMessage(){
		this.notification.showLoading();
		this.wpService.contactUs( this.contact ).subscribe( response => {
			this.notification.stopLoading();
			this.clearForm();
			this.notification.showToast( response.message );
		} )
	}

	clearForm(){
		this.contact.name = '';
		this.contact.email = '';
		this.contact.message = '';
	}

	dismiss(){
		this.navCtrl.pop({
			animate: true,
			animation: 'md-transition',
			direction: 'back'
		});
	}

	showCart(){
		this.navCtrl.push( Cart );
	}

	systemLink(link){
		cordova.InAppBrowser.open( link , '_system');
	}

	toggleSearchBar(){
		this.showSearchBar = ! this.showSearchBar;
		if(this.showSearchBar){
			this.content.scrollToTop();
		}
	}

	textSearch(){
		this.navCtrl.push(Search, {s: this.searchTerm});
	}

	openPage( page ){

		switch(page){

			case 'services':
				this.navCtrl.push(Home,{},{
					animate: false,
					animation: 'md-transition',
					direction: 'forward'
				});
			break;
			case 'about':
				this.navCtrl.push(WpPage,{ id: 74, hideBackButton: true },{
					animate: true,
					animation: 'md-transition',
					direction: 'forward'
				});
			break;
			case 'contact':
				this.navCtrl.push(Contact,{ hideBackButton: true },{
					animate: true,
					animation: 'md-transition',
					direction: 'forward'
				});
			break;
			case 'terms':
				this.navCtrl.push(WpPage,{ id: 313, hideBackButton: true },{
					animate: true,
					animation: 'md-transition',
					direction: 'forward'
				});
			break;
			case 'privacy':
				this.navCtrl.push(WpPage,{ id: 327, hideBackButton: true },{
					animate: true,
					animation: 'md-transition',
					direction: 'forward'
				});
			break;
			case 'login':
				this.navCtrl.push(Login,{ id: 327, hideBackButton: true },{
					animate: true,
					animation: 'md-transition',
					direction: 'forward'
				});
			break;
			case 'register':
				this.navCtrl.push(Register,{ id: 327, hideBackButton: true },{
					animate: true,
					animation: 'md-transition',
					direction: 'forward'
				});
			break;

		}

	}

}
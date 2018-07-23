import { Component, ViewChild  } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Content } from 'ionic-angular';
import { Cart } from '../cart/cart';
import { Services } from '../services/services';
import { NotificationHelper } from '../../providers/notification.helper';
import { WPService } from '../../providers/wp.service';
import { Observable }     from 'rxjs/Observable';
import { WpPage } from '../wp-page/wp-page';
import { Contact } from '../contact/contact';
import { Search } from '../search/search';
import {TranslateService} from 'ng2-translate';

import { Login } from '../login/login';
import { Register } from '../register/register';

import { Categories } from '../categories/categories';
import { List as AllCelebrities } from '../celebrities/list/list';
import { List as AllVendors } from '../vendors/list/list';
import { View as ViewCelebrityDetails } from '../celebrities/view/view'

declare var cordova: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {
	@ViewChild(Content) content: Content;

	page_title: String;
	categories: any[] = [];
	locations: Observable<any[]>;
	slides: any[] = [];
	celbrities: any[] = [];
	vendors: any[] = [];
	language: any;
	selectedLocation: any;
	cart_total: any;
	showSearchBar: boolean = false;
	searchTerm: any;

	constructor(
		public navCtrl: NavController, 
		private notification: NotificationHelper,
		private wpService: WPService,
		public translate: TranslateService,
		public alertCtrl: AlertController
	) {

		this.language = localStorage.getItem('language');

		this.wpService.getSlides().subscribe( results => {
			this.slides = results;
		} )

		this.wpService.getCategories().subscribe( results => {
			this.categories = results;
		} )

		this.wpService.getCelebrities().subscribe( results => {
			this.celbrities = results;
		} )
		//this.locations = this.wpService.getLocations();
		
		
		this.wpService.getVendors().subscribe( results => {
			this.vendors = results;
		} );
	}

	ionViewDidEnter(){
		this.wpService.getCartCount().subscribe( res => {
			this.cart_total = res.count;
		} )	
		setTimeout( () => {
			///this.notification.stopLoading();
		}, 300 );
	}

	showLangSelector(){
		let alert = this.alertCtrl.create();
    	alert.setTitle('Language');
    	alert.addInput({
	      type: 'radio',
	      label: 'English',
	      value: 'en',
	      checked: this.language == 'en'
	    });
	    alert.addInput({
	      type: 'radio',
	      label: 'عربي',
	      value: 'ar',
	      checked: this.language == 'ar'
	    });
	    alert.addButton('Cancel');
	    alert.addButton({
	      text: 'OK',
	      handler: data => {
	       	this.switchLanguage(data)
	      }
	    });
	    alert.present();
	}

	switchLanguage( lang ){
		this.language = lang;
		localStorage.setItem('language', lang);
		this.translate.use( lang );
	}

	getServices(category){
		this.navCtrl.push(Services,{ category: category, search : this.selectedLocation});
	}

	showCart(){
		this.navCtrl.push( Cart );
	}

	search(){
		this.navCtrl.push(Search, {area: this.selectedLocation});
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

	allCategories(){
		this.navCtrl.push(Categories);
	}

	allCelebrities(){
		this.navCtrl.push(AllCelebrities);
	}

	allVendors(){
		this.navCtrl.push(AllVendors);
	}

	getByVendor(vendor){
		this.navCtrl.push(Services, {author: vendor})
	}

	ViewCelebrity(celeb){
		this.navCtrl.push(ViewCelebrityDetails, {celebrity: celeb})
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
					direction: 'forsward'
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
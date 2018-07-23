import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WPService } from '../../providers/wp.service';
import { NotificationHelper } from '../../providers/notification.helper';

import { Home } from '../home/home';
import { Services } from '../services/services';

@Component({
  selector: 'page-vendors',
  templateUrl: 'vendors.html'
})
export class Vendors {

	browse_by: string = 'vendor';
	vendors: any[];
	
	constructor(
		public navCtrl: NavController, 
	  	public navParams: NavParams,
	  	private notification: NotificationHelper,
	  	private wpService: WPService
	){
		this.vendors = [];
		if(this.navParams.data.category != undefined && this.navParams.data.area != undefined){
			this.notification.showLoading();
			this.wpService.getVendors(this.navParams.data.category.term_id,this.navParams.data.area).subscribe( vendors => {
				this.vendors = vendors;
				this.notification.stopLoading();
			} )

		}
	}

	ionViewDidEnter(){
		this.browse_by = 'vendor';
	}

	byVendor(author){
		//console.log(id);
		this.navCtrl.push( Services, { author: author, search : this.navParams.data.area, category : this.navParams.data.category } );
	}

	browseByProduct(){
		this.navCtrl.popToRoot({
	      animate: true,
	      animation: 'md-transition',
	      direction: 'back'
	    });
	}

}
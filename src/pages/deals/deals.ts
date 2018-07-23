import { Component  } from '@angular/core';
import { WPService } from '../../providers/wp.service';
import { NotificationHelper } from '../../providers/notification.helper';

@Component({
  selector: 'page-deals',
  templateUrl: 'deals.html'
})
export class Deals {

	deals: any;
	language: any;

	constructor(private wpService: WPService,
		private notification: NotificationHelper
	){
		this.language = localStorage.getItem('language');
		this.deals = wpService.getDeals();
	}

	activateDeal(deal){
		///this.notification.showLoading();
		
		localStorage.setItem('deal', deal.id);

		this.notification.showToast( "Deal Succesfully Activated" );

		// this.wpService.activateDeal(deal.id)
		// 	.subscribe( response => {
		// 		this.notification.stopLoading();
		// 		console.log(response);
				
		// 	} )
		
	}
}
import { Component } from '@angular/core';
//import { NavController, ViewController, Events } from 'ionic-angular';
import { WPService } from '../../providers/wp.service';

@Component({
  selector: 'page-faqs',
  templateUrl: 'faqs.html'
})
export class FAQs { 

	faqs: any = [];

	active_index = -1;

	constructor( private wpService: WPService ){
		this.wpService.getFAQs().subscribe( faqs => {
			this.faqs = faqs
		} )
	}

	activateTab(index){
		this.active_index = index;
	}

}
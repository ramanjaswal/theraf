import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { WPService } from '../../providers/wp.service';
import { NotificationHelper } from '../../providers/notification.helper';

import { Home } from '../home/home';

@Component({
  selector: 'page-register',
  template: `
  	<ion-header>
		<ion-navbar hideBackButton="true">
	    	<ion-title color="light">Registration Success</ion-title>
	    	<ion-buttons end>
		      <button ion-button (click)="dismiss()" color="dark">
		        <ion-icon name="md-close"></ion-icon>
		      </button>
		    </ion-buttons>
	    </ion-navbar>
	</ion-header>
	<ion-content padding class="card-background-page">
		<ion-card class="card-page">
			<div [innerHtml]="message"></div>
		</ion-card>
	</ion-content>
  `
})
export class RegisterSuccess { 

	message: any;
	constructor( 
		private navCtrl: NavController,
		private wpService: WPService,
		private notification: NotificationHelper,
		private params: NavParams
	){
		this.message = this.params.get('message');
	}
		
	dismiss(){
		this.navCtrl.setRoot(Home, {} , {
			animate: true,
			animation: 'md-transition',
			direction: 'back'
		});
	}

}
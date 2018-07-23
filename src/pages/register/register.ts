import { Component } from '@angular/core';
import { NavController, ViewController, ModalController } from 'ionic-angular';

import { WPService } from '../../providers/wp.service';
import { NotificationHelper } from '../../providers/notification.helper';

import { Terms } from '../terms/terms';
import { Events } from 'ionic-angular';
import { RegisterSuccess } from './register-success'

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class Register { 

	user: any;

	termsModal: any;

	constructor( 
		private navCtrl: NavController,
		public viewCtrl: ViewController ,
		private wpService: WPService,
		private notification: NotificationHelper,
		public modalCtrl: ModalController,
		public events: Events
	){
		this.user = {};

		this.events.subscribe('user:created', (res) => {
			console.log("Registration success");
			this.navCtrl.popToRoot({
				animate: true,
				animation: 'md-transition',
				direction: 'back'
			});
			console.log(res)
			this.navCtrl.push(RegisterSuccess,{message: res.description});
		})
	}

	register(){
		this.termsModal = this.modalCtrl.create( Terms, { showAgree: true, user: this.user, type: 'customer' } );
		this.termsModal.present();
	}

	dismiss(){
		this.navCtrl.pop({
			animate: true,
			animation: 'md-transition',
			direction: 'back'
		});
	}

	openTerms(){
		let modal = this.modalCtrl.create( Terms );
		modal.present();
	}

}
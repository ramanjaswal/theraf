import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { Login } from '../login/login';
import { Register } from '../register/register';

import { Terms } from '../terms/terms';

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html'
})
export class Landing {

	constructor( private navCtrl: NavController, public modalCtrl: ModalController){}


	openLoginPage() {
	    this.navCtrl.push(Login,{},{
			animate: true,
			animation: 'md-transition',
			direction: 'forward'
		});
	}

	openRegistrationPage(){
	   	this.navCtrl.push(Register,{},{
			animate: true,
			animation: 'md-transition',
			direction: 'forward'
		});
	}

	openTerms(){
		let modal = this.modalCtrl.create( Terms );
		modal.present();
	}

}

import { Component } from '@angular/core';
import { NavController, ViewController, Events } from 'ionic-angular';

import { AuthService } from '../../providers/auth.service';
import { NotificationHelper } from '../../providers/notification.helper';
import { WPService } from '../../providers/wp.service';

import { TabsPage } from '../../pages/tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login { 

	login : any;

	constructor( 
		private navCtrl: NavController,  
		public viewCtrl: ViewController,
		private authService: AuthService,
		private wpService: WPService,
		private notification: NotificationHelper,
		public events: Events 
	){
		this.login = {};
	}

	doLogin(){

		this.notification.showLoading();

		this.authService.login( this.login )
			.then(response => { 

		// 		//console.log(); 

				localStorage.setItem( 'user', JSON.stringify(response) );

				this.events.publish('user:login', true);

				this.navCtrl.setRoot(TabsPage,{},{
					animate: true,
					animation: 'md-transition',
					direction: 'forward'
				});

				this.notification.stopLoading();
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

	dismiss(){
		//this.viewCtrl.dismiss();
		this.navCtrl.pop({
			animate: true,
			animation: 'md-transition',
			direction: 'back'
		});
	}

}
import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

import { WPService } from '../../../providers/wp.service';
import { NotificationHelper } from '../../../providers/notification.helper';
import { Categories as CelebritiesCategories } from '../categories/categories';

import { Login } from '../login/login';

@Component({
    selector: 'celebrities-profile',
    templateUrl: 'profile.html'
})
export class Profile {
    
    celebrity: any;
    constructor(
        private navParams: NavParams,
        private navController: NavController,
        private notifications: NotificationHelper
    ){
        this.celebrity = navParams.get('celebrity');
    }

    doContinue(){
        //alert("WORKING")
        this.navController.push( CelebritiesCategories );
    }

    logOut(){
        localStorage.removeItem('celebrity');
        //this.navController.pop();
        this.navController.setRoot(Login);
        this.notifications.showToast('You have been logged out successfully');
    }

}
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { WPService } from '../../providers/wp.service';
import { NotificationHelper } from '../../providers/notification.helper';

import { Services } from '../services/services';

@Component({
    selector: 'all-categories',
    templateUrl: 'categories.html'
})
export class Categories {

    categories: any;
    constructor(
        private navCtrl: NavController,
        private wpService: WPService,
        private notification: NotificationHelper
    ){
        this.notification.showLoading();
        this.wpService.getCategories().subscribe( result => {
            this.categories = result;
            this.notification.stopLoading();
        } )
    }

    getServices(category){
        this.navCtrl.push( Services,{ category: category });
    }
}
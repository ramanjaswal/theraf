import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { WPService } from '../../../providers/wp.service';
import { NotificationHelper } from '../../../providers/notification.helper';

import { Services } from '../../services/services';

@Component({
    selector: 'list-vendors',
    templateUrl: 'list.html'
})
export class List {

    vendors: any;
    showToggle: any = false;
    constructor(
        private navCtrl: NavController,
        private wpService: WPService,
        private notification: NotificationHelper,
        private navParams: NavParams
    ){
        this.notification.showLoading();
        this.wpService.getVendors().subscribe( results => {
            this.vendors = results;
            this.notification.stopLoading();
        } );
        this.showToggle = this.navParams.get('showToggle');
    }

    showItems(author){
        this.navCtrl.push( Services, { author: author } )
    }
}
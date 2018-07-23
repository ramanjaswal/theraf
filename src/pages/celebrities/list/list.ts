import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { WPService } from '../../../providers/wp.service';
import { NotificationHelper } from '../../../providers/notification.helper';

import { Services as CelebritiesServices } from '../services/services';
import { View as ViewCelebrityDetails } from '../view/view';

@Component({
    selector: 'list-celebrities',
    templateUrl: 'list.html'
})
export class List {

    celebrities: any;
    showToggle: any = false;
    constructor(
        private navCtrl: NavController,
        private wpService: WPService,
        private notification: NotificationHelper,
        private navParams: NavParams
    ){
        this.notification.showLoading();
        this.wpService.getCelebrities().subscribe( result => {
            this.celebrities = result;
            this.notification.stopLoading();
        } );
        this.showToggle = this.navParams.get('showToggle');
    }

    ViewCelebrity(celeb){
        this.navCtrl.push( ViewCelebrityDetails, { celebrity: celeb } )
    }
}
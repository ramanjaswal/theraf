import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

import { WPService } from '../../../providers/wp.service';
import { NotificationHelper } from '../../../providers/notification.helper';

//import { Services } from '../../services/services';
import { Items } from '../items/items';

@Component({
    selector: 'view-celebrity',
    templateUrl: 'view.html'
})
export class View {

    celebrity: any;
    categories: any = [];
    constructor(
        private navParams: NavParams,
        private wpService: WPService,
        private navCtrl: NavController,
        private notification: NotificationHelper
    ){
        this.celebrity = this.navParams.get('celebrity');
        this.notification.showLoading();
        wpService.getCelebrityCategories( this.celebrity.id  ).subscribe( result => {
            this.categories = result;
            this.notification.stopLoading();
        } )

    }

    showItems(category){
        this.navCtrl.push( Items, { celebrity: this.celebrity, category: category } )
    }
}
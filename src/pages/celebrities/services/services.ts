import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

import { WPService } from '../../../providers/wp.service';
import { NotificationHelper } from '../../../providers/notification.helper';

@Component({
    selector: 'celebrities-services',
    templateUrl: 'services.html'
})
export class Services {

    services: any;
    selectedItems: any = [];
    category: any;
    //savedServices: any = [];

    constructor(
        private navParams: NavParams,
        private wpService: WPService,
        private notification: NotificationHelper,
        private navCtrl: NavController
    ){
        this.category = navParams.get('category');
        this.services = this.wpService.getServicesByCategory( this.category.term_id, '0' );
        this.getSavedServices();
    }

    getSavedServices(){
        this.notification.showLoading();
        this.wpService.getCelebrityServicesByCategory(this.category.term_id)
            .subscribe( results => {
                this.notification.stopLoading();
                for( let i=0 ; i< results.length; i++ ){
                    let _result = results[i];

                    this.selectedItems.push( parseInt(_result.service_id) )

                }
            } )
    }

    selectItem(service){
        //console.log(service);
        if(this.selectedItems.indexOf( service.ID ) > -1){
            this.selectedItems.splice( this.selectedItems.indexOf( service.ID ), 1 )
        }else{
            this.selectedItems.push( service.ID )
        }
    }

    isSelected(service){
        return ( this.selectedItems.indexOf( service.ID ) > -1 )
    }

    saveItems(){

        let celeb = JSON.parse( localStorage.getItem('celebrity') );
        let _params = { celebrity_id: celeb.id, category_id: this.category.term_id, services: this.selectedItems };
        this.notification.showLoading();
        this.wpService.saveCelebirityServices( _params ).subscribe( response => {
            //console.log( response );
            this.notification.stopLoading();
            if(response.success){
                this.notification.showToast(response.message);
            }

            debugger
        });
        
    }
}
import { Component } from '@angular/core';
import { WPService } from '../../providers/wp.service';
import { NotificationHelper } from '../../providers/notification.helper';
import { AlertController } from 'ionic-angular';

@Component({
    selector: 'page-orders',
    templateUrl: 'orders.html'
})
export class Orders { 

    orders: any[] = [];

    status : any = {
        0: 'New',
        1: 'Preparing',
        2: 'Ready',
        3: 'Complete',
        4: 'Canceled'
    }

    constructor(
        private wpService: WPService,
        private notification: NotificationHelper,
        private alertCtrl: AlertController
    ){
        this.getOrders();
    }

    getOrders(){
        this.notification.showLoading();
        this.wpService.getMyOrders().subscribe( orders => {
            this.orders = orders;
            this.notification.stopLoading();
        } )
    }

    badgeColor(status){
        switch(status){
            case '0':
                return 'primary'
            case '1':
                return 'yellow'
            case '2':
                return 'orange'
            case '3':
                return 'secondary'
            case '4':
                return 'danger'

        }
    }

    orderItems(items){
        console.log(items)
    }

    deleteOrder(id){

        let _this = this;

        let confirm = this.alertCtrl.create({
            title: "Delete order",
            message: "It will cancel you order. Do you want to proceed?",
            buttons: [
              {
                text: 'Yes',
                handler: function(){
                    _this.doCancelOrder(id)
                }
              },
              {
                text: 'No',
                handler: function(){ /*Do Nothing*/ }
              }
            ]
          });
          confirm.present();
    }

    doCancelOrder(id){
        this.notification.showLoading();
        this.wpService.deleteMyOrder(id).subscribe( result => {
            //console.log(result)
            this.notification.stopLoading();
            
            if( this.status ){
                this.getOrders();
            }
            
            this.notification.showToast(result.message);

            
        } )
    }

    getTrackingNumber(response){

        let tracking_number = '';
        if(response.output){
            tracking_number = response.output.tracknumber;
        }

        return tracking_number;
    }
}
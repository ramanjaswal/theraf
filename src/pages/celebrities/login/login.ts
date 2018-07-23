import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import { WPService } from '../../../providers/wp.service';
import { NotificationHelper } from '../../../providers/notification.helper';
import { Profile as CelebritiesProfile } from '../profile/profile';

@Component({
    selector: 'celebrities-login',
    templateUrl: 'login.html'
})
export class Login {

    passcode: any;

    constructor(
        private wpService: WPService,
        private notification: NotificationHelper,
        private navCtrl: NavController
    ){}

    doLogin(){

        this.notification.showLoading();
        this.wpService.celebrityLogin(this.passcode).subscribe( response => {

            console.log(response);
            if(response.success){
                let _celeb = response.data;
                localStorage.setItem('celebrity', JSON.stringify( _celeb ))
                //this.navCtrl.push( CelebritiesProfile, { celebrity: _celeb } );
                this.navCtrl.setRoot( CelebritiesProfile, { celebrity: _celeb } );
            }
            this.notification.showToast(response.message);
            this.notification.stopLoading();

        } )
    }

}
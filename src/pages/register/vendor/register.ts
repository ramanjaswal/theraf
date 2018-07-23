import { Component } from '@angular/core';
import { NavController, ModalController, Events } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { WPService } from '../../../providers/wp.service';
import { NotificationHelper } from '../../../providers/notification.helper';

import { Terms } from '../../terms/terms';
import { RegisterSuccess } from '../register-success'

@Component({
    selector: 'vendor-register',
    templateUrl: 'register.html'
})
export class Register {

    user: any = {};
    categories: any;
    locations: any;
    vendorForm: FormGroup;
    constructor(
        private navCtrl: NavController,
        private wpService: WPService,
        private notification : NotificationHelper,
        private modalCtrl: ModalController,
        public events: Events
    ){
        // 
        this.notification.showLoading();
        this.wpService.getCategories().subscribe( result => {
            this.categories = result;
            this.notification.stopLoading();
        } );

        this.wpService.getLocations().subscribe( result => {
            this.locations = result;
        } );

        this.user.id_type = "national_id";

        this.vendorForm = new FormGroup({ 
            'business_name': new FormControl(this.user.business_name, [
                Validators.required
            ]),
            'fname': new FormControl(this.user.fname, [
                Validators.required
            ]),
            'lname': new FormControl(this.user.lname, [
                Validators.required
            ]),
            'mobile': new FormControl(this.user.mobile, [
                Validators.required
            ]),
            'email': new FormControl(this.user.email, [
                Validators.required
            ]),
            'instagram': new FormControl(this.user.instagram, [
                //Validators.required
            ]),
            'product_categories': new FormControl(this.user.product_categories, [
                Validators.required
            ]),
            'city': new FormControl(this.user.city, [
                Validators.required
            ]),
            'bank': new FormControl(this.user.bank, [
                Validators.required
            ]),
            'address': new FormControl(this.user.address, [
                Validators.required
            ]),
            'account_number': new FormControl(this.user.account_number, [
                Validators.required
            ]),
            'account_holder': new FormControl(this.user.account_holder, [
                Validators.required
            ]),
            'id_type': new FormControl(this.user.id_type, [
                //Validators.required
            ]),
            'id_number': new FormControl(this.user.id_number, [
                //Validators.required
            ])
        });


        this.events.subscribe('vendor:created', (res) => {
			console.log("Registration success");
			this.navCtrl.popToRoot({
				animate: true,
				animation: 'md-transition',
				direction: 'back'
			});
            this.navCtrl.push(RegisterSuccess,{ message: res.description });
            this.vendorForm.reset();
		})
    }

    register(){

        if( this.vendorForm.invalid ){
            this.notification.showToast("Enter all the required fields")
            return false;
        }
        this.modalCtrl.create( Terms, { showAgree: true, user: this.vendorForm.value, type: 'vendor' } ).present();
  
    }

    openTerms(){
		let modal = this.modalCtrl.create( Terms );
		modal.present();
	}

    // showItems(category){
    //     this.navCtrl.push( CelebritiesServices, { category: category } )
    // }

    //get business_name() { return this.vendorForm.get('business_name'); }
}
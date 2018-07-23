import { Injectable }    from '@angular/core';
import { LoadingController, ToastController,AlertController } from 'ionic-angular';
import {TranslateService} from 'ng2-translate';

@Injectable()
export class NotificationHelper {

	loading: any;
	
	constructor(
		private loadingCtrl: LoadingController, 
		private toastCtrl: ToastController,
		private alertCtrl: AlertController,
		private translate: TranslateService){}

	showLoading(msg = 'Please wait...'){
		this.loading = this.loadingCtrl.create({
		    content: msg
		});
		this.loading.present();
	}

	stopLoading(){
		this.loading ? this.loading.dismiss() : '';
	}

	showToast( message ){
		let toast =this.toastCtrl.create({
		    message: message,
		    duration: 4000,
		    //position: 'top'
		});

		toast.present();
	}

	showConfirm(title, message, no, yes) {

		let _success_txt = 'Continue Shopping';
		this.translate.get(_success_txt).subscribe( (res) => {
			_success_txt = res;
		} )

		let _cancel_txt = 'Show Cart';
		this.translate.get(_cancel_txt).subscribe( (res) => {
			_cancel_txt = res;
		} )

	    let confirm = this.alertCtrl.create({
	      title: title,
	      message: message,
	      buttons: [
	        {
	          text: _success_txt,
	          handler: no
	        },
	        {
	          text: _cancel_txt,
	          handler: yes
	        }
	      ]
	    });
	    confirm.present();
	}

	showSelectLocation(title, message, data,  yes) {
		
		this.translate.get(message).subscribe( (res) => {
			message = res;
		} )

		let alert = this.alertCtrl.create();
	    alert.setTitle(message);
	    console.log(data);
	    data.forEach(st=> {
	       alert.addInput({
		      type: 'radio',
		      label: st.name,
		      value: st.term_id
		    });
	    });

	    alert.addButton({
	      text: 'OK',
	      handler: yes
	    });

	    alert.present();
	}

}
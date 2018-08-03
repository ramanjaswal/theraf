import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Home } from '../pages/home/home';
import { Landing } from '../pages/landing/landing';
import { Services } from '../pages/services/services';
import { WpPage } from '../pages/wp-page/wp-page';
import { Contact } from '../pages/contact/contact';

import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';

import { Deals } from '../pages/deals/deals';
import { Login as CelebritiesLogin } from '../pages/celebrities/login/login';
import { Profile as CelebritiesProfile } from '../pages/celebrities/profile/profile';

import { Register as VendorRegister } from '../pages/register/vendor/register';

import { NotificationHelper } from '../providers/notification.helper';
//import { Push, PushObject, PushOptions } from '@ionic-native/push';

import { FCM } from '@ionic-native/fcm';

import { WPService } from '../providers/wp.service';
import {TranslateService} from 'ng2-translate';

import { AlertController } from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs';
import { Orders } from '../pages/orders/orders';
import { FAQs } from '../pages/faqs/faqs';

declare const cordova: any;

@Component({
  templateUrl: 'app.html',
  providers: [FCM]
})



export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;
  // rootPage: any = Landing;

  user: any = {};

  language: any;

  pages: Array<{title: string, icon: string, component: any, params: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen, 
    private notifications: NotificationHelper,
    private menuCtrl: MenuController,
    private fcm: FCM,
    public events: Events,
    private wpService: WPService,
    public translate: TranslateService,
    private alertCtrl: AlertController) {

    /*****/

    this.language = localStorage.getItem('language');

    var lang = localStorage.getItem('language');

    if(lang == null){
      lang = 'en';
    }

    translate.setDefaultLang('en');
    translate.use( lang );
    localStorage.setItem('language', lang);

    this.initializeApp();

    // used for menu bar
    this.pages = [
      { title: 'Home', icon: 'md-home', component: TabsPage, params: {} },
      //{ title: 'Deals', icon: 'md-cash', component: Deals, params: {} },
      { title: 'About Us', icon: 'md-contact', component: WpPage, params: { id: 74 } },
      { title: 'Contact Us', icon: 'md-mail', component: Contact, params: {} },
      //{ title: 'Celebrity', icon: '', component: CelebritiesLogin, params: {} }
    ];

    this.user = localStorage.getItem( 'user' );

    //after login
    events.subscribe('user:login',()=>{
      this.user = localStorage.getItem( 'user' );

      this.wpService.savePushToken().subscribe((res)=>{
        console.log("Push token saved");
      });
      
    })

    // console.log(this.user);

    // if(this.user !== null){ //if user logged In
    //   this.notifications.showLoading();
    //   this.rootPage = Home;
    // }

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //this.statusBar.styleDefault();
      this.splashScreen.hide();

      // const options: PushOptions = {
      //    ios: {
      //        alert: 'true',
      //        badge: true,
      //        sound: 'true'
      //    }
      // };
      
      // const pushObject: PushObject = this.push.init(options);

      // pushObject.on('notification').subscribe((notification: any) => {
      //   console.log('Received a notification', notification)
      // });

      // pushObject.on('registration').subscribe((registration: any) => {
      //   console.log('Device registered', registration);
      //   localStorage.setItem('push_token', registration.registrationId );
      // });

        this.fcm.getToken().then(token=>{
          localStorage.setItem('push_token', token );
        })

        this.fcm.onNotification().subscribe(data=>{
          if(data.wasTapped){
            console.log("Received in background");
          } else {
            console.log("Received in foreground");
            // alert( JSON.stringify(data) )
          };

          let alert = this.alertCtrl.create({
            title: 'Notification',
            subTitle: data.aps.alert.title,
            message: data.aps.alert.body,
            buttons: ['Dismiss']
          });
          alert.present();

        })

        this.fcm.onTokenRefresh().subscribe(token=>{
          localStorage.setItem('push_token', token );
        })
      
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component, page.params);
  }

  logOut(){
    //localStorage.clear();
    localStorage.removeItem('user'); //remove user data only
    this.menuCtrl.close();
    //this.rootPage = Landing;
    this.user = null;
    this.rootPage = Home;
  }

  openLogin(){
    //this.nav.push(Login,{});
    this.nav.setRoot(Login, {});
    this.menuCtrl.close();
  }

  openRegister(){
    //this.nav.push(Register,{});
    this.nav.setRoot(Register, {});
    this.menuCtrl.close();
  }

  openVendorRegistration(){
    this.nav.setRoot(VendorRegister,{});
    this.menuCtrl.close();
  }

  openVendorLogin(){

    var ref = cordova.InAppBrowser.open( 'http://www.theraf.co/wp-admin' , '_blank', 'toolbarposition=top,location=yes');

  }

  showOrders(){
    this.nav.setRoot(Orders)
  }

  openWpPage(id){
    this.nav.setRoot(WpPage, {id: id})
  }

  openFaq(){
    this.nav.setRoot(FAQs)
  }

  pushPage(page){

    switch(page){

      case 'celeb_login':

      let celeb = localStorage.getItem('celebrity');
      if( celeb !== null ){
          
          celeb = JSON.parse(celeb);
          //this.nav.push( CelebritiesProfile, { celebrity: celeb } );
          this.nav.setRoot( CelebritiesProfile, { celebrity: celeb } );
      }else{
        //this.nav.push( CelebritiesLogin,{});
        this.nav.setRoot( CelebritiesLogin, {} );
      }
      break;
    }
    
  }
}

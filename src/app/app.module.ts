import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { Landing } from '../pages/landing/landing';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';
import { RegisterSuccess } from '../pages/register/register-success';
import { Services } from '../pages/services/services';
import { Service } from '../pages/service/service';
import { Cart } from '../pages/cart/cart';
import { Address } from '../pages/address/address';
import { Review } from '../pages/review/review';
import { Payment } from '../pages/payment/payment';
import { PaymentSuccess } from '../pages/payment_success/payment_success';
import { WpPage } from '../pages/wp-page/wp-page';
import { Contact } from '../pages/contact/contact';
import { Search } from '../pages/search/search';
import { Vendors } from '../pages/vendors/vendors';
import { HttpModule }    from '@angular/http';
import { WPService } from '../providers/wp.service';
import { AuthService } from '../providers/auth.service';
import { NotificationHelper } from '../providers/notification.helper';
import { NgCalendarModule  } from 'ionic2-calendar';
import { Terms  } from '../pages/terms/terms';
import { Push } from '@ionic-native/push';
import { Http } from '@angular/http';
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from 'ng2-translate';
import { Deals } from '../pages/deals/deals';

import { Login as CelebritiesLogin } from '../pages/celebrities/login/login';
import { Profile as CelebritiesProfile } from '../pages/celebrities/profile/profile';
import { Categories as CelebritiesCategories } from '../pages/celebrities/categories/categories';
import { Services as CelebritiesServices } from '../pages/celebrities/services/services';
import { List as AllCelebrities } from '../pages/celebrities/list/list';
import { View as ViewCelebrity } from '../pages/celebrities/view/view';
import { Items as CelebrityItems } from '../pages/celebrities/items/items';

import { TabsPage } from '../pages/tabs/tabs';

import { Categories as AllCategories } from '../pages/categories/categories';
import { List as AllVendors } from '../pages/vendors/list/list';

import { Register as VendorRegister } from '../pages/register/vendor/register';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    Home,
    Landing,
    Login,
    Register,
    Services,
    Service,
    Cart,
    Address,
    Review,
    Payment,
    PaymentSuccess,
    WpPage,
    Contact,
    Search,
    Vendors,
    Terms,
    RegisterSuccess,
    Deals,
    CelebritiesLogin,
    CelebritiesProfile,
    CelebritiesServices,
    CelebritiesCategories,
    AllCategories,
    AllCelebrities,
    AllVendors,
    ViewCelebrity,
    CelebrityItems,
    VendorRegister,
    TabsPage
  ],
  imports: [
    BrowserModule,
    NgCalendarModule,
    IonicModule.forRoot(MyApp,{
      mode: 'ios',
      platforms: {
        ios: {
          statusbarPadding: false
        }
      }
    }),
    HttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Landing,
    Login,
    Register,
    Services,
    Service,
    Cart,
    Address,
    Review,
    Payment,
    PaymentSuccess,
    WpPage,
    Contact,
    Search,
    Vendors,
    Terms,
    RegisterSuccess,
    Deals,
    CelebritiesLogin,
    CelebritiesProfile,
    CelebritiesServices,
    CelebritiesCategories,
    AllCategories,
    AllCelebrities,
    AllVendors,
    ViewCelebrity,
    CelebrityItems,
    VendorRegister,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    NotificationHelper,
    WPService,
    Push
  ]
})
export class AppModule {}

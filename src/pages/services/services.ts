import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Service } from '../service/service';
import { WPService } from '../../providers/wp.service';
import { NotificationHelper } from '../../providers/notification.helper';
import { Cart } from '../cart/cart';
import { Observable }     from 'rxjs/Observable';
import { Vendors } from '../vendors/vendors';

import LOCATIONS from '../../data/locations';

@Component({
  selector: 'page-services',
  templateUrl: 'services.html'
})
export class Services {

  category: any;
  area: any;
  services: any[];
  cart_total: any;
  browse_by: string = 'product';

  author: any;
  page_title: string;
  locations: Observable<any[]>;
  

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	private notification: NotificationHelper,
  	private wpService: WPService,
    public alertCtrl: AlertController) 
  {

    if( this.navParams.get('category') != undefined &&    
        this.navParams.get('search') != undefined && 
        this.navParams.get('author') == undefined ) 
    {

      this.category = this.navParams.get('category');
    	this.area = this.navParams.get('search');
      this.page_title = this.category.name;
      this.notification.showLoading();
    	this.wpService.getServicesByCategory( this.category.term_id, this.area ).subscribe( services => {
        this.services = services;
        this.notification.stopLoading();
      } );
      this.browse_by = 'product';

    } else if( this.navParams.get('author') != undefined &&           
               this.navParams.get('search') != undefined && this.navParams.get('category') != undefined )
    {

      this.category = this.navParams.get('category');
      this.author = this.navParams.get('author');
      this.area = this.navParams.get('search');
      this.page_title = this.author.name;
      this.notification.showLoading();
      this.wpService.getByAuthor( this.author.id, this.category.term_id, this.area).subscribe( services => {
        this.services = services;
        this.notification.stopLoading();
      } );
      this.browse_by = 'vendor';

    } 
    else if( this.navParams.get('author') != undefined ){

      this.author = this.navParams.get('author');

      this.notification.showLoading();
      this.wpService.getByAuthor( this.author.id ).subscribe( services => {
        this.services = services;
        this.notification.stopLoading();
      } );
      this.browse_by = 'vendor';
    }
    else {

      this.category = this.navParams.get('category');
      this.services = [];

      if(this.category && this.category.needs_location){ //aks for location
        this.notification.showLoading();

        this.showLocationSelector();
        this.notification.stopLoading();
        // this.wpService.getLocations().subscribe( locations => {
        //   this.notification.stopLoading();
        //     this.notification.showSelectLocation( 
        //       'Locations', 
        //       'Choose Your Area',
        //       locations,
        //       (data) => { this.search(data) });
        // } );

      }else{
        //load services irrespective of the location
        this.area = 0; //set location to 0 => load services for all locations
        this.notification.showLoading();
        this.wpService.getServicesByCategory( this.category.term_id, this.area ).subscribe( services => {
          this.services = services;
          this.notification.stopLoading();
        } );
      }

      
      
    }

  }

  showLocationSelector( selectedIndex = 0 ){
    let alert = this.alertCtrl.create();
    alert.setTitle('Delivery Location');

    LOCATIONS.forEach( function(location , index){
      alert.addInput({
          type: 'radio',
          label: location,
          value: (index + 1).toString(),
          checked: index == selectedIndex
        });
    } )
    
      alert.addButton({
        text: 'OK',
        handler: data => { this.setLocation(data) }
      });
      alert.present();
  }

  setLocation( location ){
    console.log("Selected Location: " + location);
    //this.selected_location = LOCATIONS[ location - 1 ];

    localStorage.setItem('delivery_location', location);

    this.search(location)
  }

  ionViewDidEnter(){
    this.wpService.getCartCount().subscribe( response =>{
      this.cart_total = response.count;
    } )
    
  }

  showService(service){
  	this.notification.showLoading();
	  this.navCtrl.push(Service, { service: service });
  }

  showCart(){
    this.navCtrl.push( Cart );
  }

  search(area){

    if( this.navParams.get('category') != undefined && area != undefined ){
      this.category = this.navParams.get('category');
      this.area = area;
      this.page_title = this.category.name;
      this.notification.showLoading();
      this.wpService.getServicesByCategory( this.category.term_id, area ).subscribe( services => {
        this.services = services;
        this.notification.stopLoading();
      } );
      this.browse_by = 'product';
    }
  }

  browseByVendor(){

    this.navCtrl.push( Vendors, { category:this.category,
                                  area:this.area },{
      animate: true,
      animation: 'md-transition',
      direction: 'forward'
    } );

  }

  browseByProduct(){
    this.navCtrl.popToRoot({
      animate: true,
      animation: 'md-transition',
      direction: 'back'
    } );
  }

}
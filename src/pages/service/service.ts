import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WPService } from '../../providers/wp.service';
import { NotificationHelper } from '../../providers/notification.helper';

import { Cart } from '../cart/cart';
import { CalendarComponent } from "ionic2-calendar/calendar";

//declare var $: any;

@Component({
  selector: 'page-service',
  templateUrl: 'service.html'
})
export class Service {

  @ViewChild(CalendarComponent) eventCalendar:CalendarComponent;

  service: any;
  item: any;
  cart_total: any;
  eventSource: any[] = [];
  calendar = {
    mode: 'month',
    currentDate: new Date()
  }
  times: any[] = [];
  months: any[] = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  calendarTitle: any;
  language: any;

  celebrity_id: any;

  variant_price:Number = 0;

  booked_slots = [];

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	private notification: NotificationHelper,
  	private wpService: WPService) {

      //----
      var yesterday = new Date();
      yesterday.setDate( yesterday.getDate() - 1 );

      let prev = {
        title: 'Previous Days',
        startTime: new Date(Date.UTC(1900, 1, 1)),
        endTime: yesterday,
        allDay: true
      }
      this.eventSource.push( prev );
      //-------------

  		this.item = {};
  		this.item.variants = {};

      this.item.questions = {};

  		this.item.days = 1;
  		this.item.quantity = 1;
      this.language = localStorage.getItem('language');

  		this.service = this.navParams.get('service');

      //Get Celbrity Id from NavParams
      this.celebrity_id = this.navParams.get('celebrity_id');

  		this.wpService.getService( this.service.ID ).subscribe(service => { 

        console.log("Service:", service);

  			this.service = service;

  			this.item.service_id = this.service.ID;
  			this.item.hours = this.service.minimum_hours;

  			for(let variant of service.variants){
  				// console.log( variant );
  				this.item.variants[variant.variant_name] = variant.variants_optionss[0].variant_name;
  			}

        if( service.prepration_days > 0 ){

          let end_time = new Date();

          if( service.prepration_days > 1 ){
            end_time.setDate( end_time.getDate() + (service.prepration_days - 1) );
          }
          
          let _d = new Date();
          _d.setDate( _d.getDate() + parseInt(service.prepration_days) );
          this.calendar.currentDate = _d;

          var _day = {
            title: 'Prepration Days',
            startTime: new Date(),
            endTime: end_time,
            allDay: true
          }

          this.eventSource.push( _day );
        }
        //checking for unavailable days and times
        for( var i = 0; i < service.bookings.length; i++ ){

          var _booking = service.bookings[i];

          //console.log( _booking );
          var _end = new Date( _booking.date );
          _end.setDate( _end.getDate() + 1 );

          if( _booking.all_day == 1 ){
            var _day = {
              title: 'Booked Days',
              startTime: new Date( _booking.date ),
              endTime: _end,
              allDay: true
            }

            this.eventSource.push( _day );

          }

        }

        //console.log(this.eventSource);

        this.notification.stopLoading();
        
        if(service.manage_calendar){
          this.initCalendar();
        }
        
  		});
  }

  initCalendar(){

    this.item.date = this.calendar.currentDate;
    console.log(this.calendar.currentDate);

    let that = this;

    let times = [];
    for(let i=0 ; i<this.service.timings.length; i++){
      let _timing = this.service.timings[i];

      if( i == 0 ){
        this.item.time = _timing.from;
      }

      for( let j = parseInt(_timing.from); j <= (parseInt(_timing.to) - 1); j++ ){
        times.push( j );
      }
    }

    this.times = times;

    // $("#datetimepicker").datetimepicker({
    //   inline:true,
    //   minDate: 0,
    //   allowTimes: times,
    //   onSelectDate: function(ct){
    //     console.log(ct);
    //     that.item.date = ct;
    //   },
    //   onSelectTime: function(ct){
    //     that.item.time = ct;
    //   }
    // });
    //force calendar to reload events
    this.eventCalendar.loadEvents();
  }

  ionViewDidEnter(){
    this.wpService.getCartCount().subscribe( response =>{
      this.cart_total = response.count;
    } )

    document.querySelector("body").classList.add('is_rtl');

  }

  fakeArray(start, end){
  	let _arr = [];
  	for( let i = start; i <= end; i++ ){
  		_arr.push(i);
  	}
  	return _arr;
  }

  onViewTitleChanged(title){
    this.calendarTitle = title;
  }

  // today(){
  //   this.calendar.currentDate = new Date();
  // }

  addToCart(){
  	//console.log( this.item );
  	

  	//modify to match the format on website
  	let d = new Date(this.item.date);
  	this.item.date = d.getDate() + ' ' + this.months[ d.getMonth() ] + ', ' + d.getFullYear();

  	//filer only hour in time
  	let t = this.item.time
  	//this.item.time = t.getHours();
    let required_questions = [];
    for( let i=0; i < this.service.questions.length; i++ ){
      let _question = this.service.questions[i];
      if( _question.is_required ){
        required_questions.push( _question.question );
      }
    }

    let answered = Object.keys(this.item.questions);
    let is_valid = true;

    if( required_questions.length > answered.length  ){
      is_valid = false;
    }else{

      for(let i=0; i<required_questions.length; i++){
        if( answered.indexOf(required_questions[i]) < 0 ){
          is_valid = false;
        }
      }

    }

    if(!is_valid){
      this.notification.showToast("Please Enter all the required fields.");
      return false;
    }


    //attach celeb id to item if from celeb page
    if( this.celebrity_id ){
      this.item.celebrity_id = this.celebrity_id;
    }

    console.log("Item", this.item);

    this.notification.showLoading();


  	this.wpService.addToCart( this.item ).subscribe( response => {
  		// console.log( response );
  		this.cart_total = response.count;

      //save cart id to loacl storage
      localStorage.setItem('cart_id', response.cart_id);

  		this.notification.showConfirm( 
  			'Success', 
  			this.service.title + ' has been successfully added to your cart.',
  			() => { this.navCtrl.pop(); },
  			() => { this.showCart() });
  		this.notification.stopLoading();
  	}, err => {
  		this.notification.stopLoading();
  		if(err.status == 403){
  			this.notification.showToast( "You are not authorized to perform this action" );
  		}else{
  			this.notification.showToast( "Error connecting to server" );
  		}

  	} )
  }

  showCart(){
    this.navCtrl.push( Cart );
  }

  onChangeDate(date){
    this.item.date = date;

    this.booked_slots = [];

    let _y = date.getFullYear();
    let _m = date.getMonth();
    let _d = date.getDate();

    let date_str = _y  + '-' + (_m < 9 ? ('0'+ (_m+1) ) : _m ) + '-' + (_d < 9 ? ('0'+ (_d+1) ) : _d );

    if(this.service && this.service.bookings){
      for( let i=0 ; i< this.service.bookings.length; i++ ){
        var _booking = this.service.bookings[i];

        if(date_str == _booking.date){
          //console.log(  )

          for( let i=0 ; i< _booking.time.length ; i++ ){

            let slot_index = _booking.time[i];
            let slot = this.service.timings[slot_index];

            for(let i = parseInt(slot.from) ; i < (slot.to - 1) ; i++ ){
              this.booked_slots.push( i ); 
            }
          }
        }

      }
  }

  }

  addVariantPrice(variant){

    let variant_name = this.item.variants[variant.variant_name];
    var keepGoing = true;
    variant.variants_optionss.forEach(st=> {
      if(st.variant_name == variant_name && keepGoing){
        this.variant_price = parseFloat(st.variant_price);
        keepGoing = false;
      }
    });

  }

  isOutofstock(service){

    let k = Object.keys(this.item.variants);

    let selected_variant = this.item.variants[ k[0] ];
    

    let out_of_stock = false;
    if( service.manage_stock && service.stock == 0  ){
      out_of_stock = true;
    }

    if(this.service.variants){

      this.service.variants.forEach( (val, i) => {
          if( val.variant_name == k[0] ){
            
            val.variants_optionss.forEach( (val2, j) => {
              if(val2.variant_name == selected_variant){

                if(val2.variant_stock == 0){
                  out_of_stock = true;
                }else{
                  out_of_stock = false;
                }
                
              }
            } )

          }
      } )

    }

    return out_of_stock;
  }

  toFloat(num){
    return parseFloat(num);
  }

  changeQty(dir){

    if(dir == 'inc'){
      this.item.quantity += 1
    }
    if(dir == 'dec'){
      this.item.quantity -= 1
    }

  }

}
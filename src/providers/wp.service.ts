import { Injectable }    from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { API_BASE } from '../config';

import 'rxjs/add/operator/toPromise';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

@Injectable()
export class WPService {

	private API_URL = API_BASE + 'eventos/v1';

	constructor(private http: Http) { }

	getHeader() {

		let user = JSON.parse( localStorage.getItem('user') );

		if(user != null){
			let headers = new Headers({'Content-Type': 'application/json'});  
			headers.append('Authorization','Bearer '+ user.token);
			return new RequestOptions({headers: headers});
		}else{
			return {};
		}
	}


	getCartId(){

		let cart_id = localStorage.getItem('cart_id');
		if(cart_id == null) cart_id = '0';
		return cart_id;
	}

	//Register Customer
	registerCustomer( params ){

		return this.http.post( this.API_URL + '/register-customer', params )
				.toPromise()
               	.then(response => response.json() )
               	.catch(this.handleError);

	}

	//Register Vendor
	registerVendor( params ){

		return this.http.post( this.API_URL + '/vendor/register', params )
				.toPromise()
               	.then(response => response.json() )
               	.catch(this.handleError);

	}

	getCategories(): Observable<any[]> {

		return this.http.get(this.API_URL + '/categories')
               .map(response => response.json() )
               .catch(error => {
			        //console.log(error);
			        return Observable.of<any>([]);
			    });

	}

	getLocations(): Observable<any[]> {

		return this.http.get(this.API_URL + '/locations')
               .map(response => response.json() )
               .catch(error => {
			        //console.log(error);
			        return Observable.of<any>([]);
			    });

	}

	getSlides(): Observable<any[]> {

		return this.http.get(this.API_URL + '/slides')
               .map(response => response.json() )
               .catch(error => {
			        //console.log(error);
			        return Observable.of<any[]>([]);
			    });

	}

	getServicesByCategory(id,area = ''): Observable<any[]>{
	
		let params = id;
		if(area !== ''){
			params = id + '?area='+area;
		}

		return this.http.get(this.API_URL + '/category/'+params)
               .map(response => response.json() )
               .catch(error => {
			        //console.log(error);
			        return Observable.of<any[]>([]);
			    });
	}

	getService(id): Observable<any>{
		return this.http.get(this.API_URL + '/service/'+id)
               .map(response => response.json() )
               .catch(error => {
			        //console.log(error);
			        return Observable.of<any>({});
			    });
	}

	addToCart(params): Observable<any>{

		let cart_id = this.getCartId();

		return this.http.post(this.API_URL + '/add-to-cart?cart_id='+ cart_id , params, this.getHeader() )
               .map(response => response.json() )
               .catch(error => {
			        //console.log(error);
			        return Observable.of<any>({});
			    });
	}

	getCartCount(): Observable<any>{

		let cart_id = this.getCartId();

		return this.http.get(this.API_URL + '/cart-count?cart_id='+ cart_id , this.getHeader() )
               .map(response => response.json() )
               .catch(error => {
			        //console.log(error);
			        return Observable.of<any>();
			    });
	}

	getMyCart(): Observable<any>{

		let cart_id = this.getCartId();

		let location = localStorage.getItem('delivery_location')

		return this.http.get(this.API_URL + '/my-cart?cart_id='+ cart_id + '&location=' + location , this.getHeader() )
               .map(response => response.json() )
               .catch(error => {
			        //console.log(error);
			        return Observable.of<any[]>([]);
			    });
	}

	removeFromCart(key): Observable<any>{

		let cart_id = this.getCartId();

		return this.http.post(this.API_URL + '/delete-from-cart?cart_id='+ cart_id, { id: key}, this.getHeader() )
               .map(response => response.json() )
               .catch(error => {
			        //console.log(error);
			        return Observable.of<any>({});
			    });
	}

	myAddress(): Observable<any>{
		return this.http.get(this.API_URL + '/my-address/', this.getHeader() )
               .map(response => response.json() )
               .catch(error => {
			        //console.log(error);
			        return Observable.of<any>({});
			    });
	}

	saveAddress(address): Observable<any>{
		return this.http.post(this.API_URL + '/save-address/', address, this.getHeader() )
               .map(response => response.json() )
               .catch(error => {
			        //console.log(error);
			        return Observable.of<any>({});
			    });
	}

	registerAndCheckout(data): Observable<any>{

		data.cart_id = this.getCartId();

		return this.http.post(this.API_URL + '/register-and-checkout/', data)
			.map(response => response.json() )
           	.catch(error => {
		        //console.log(error);
		        return Observable.of<any>({});
		    });
	}

	saveOrder(): Observable<any>{

		let cart_id = this.getCartId();
		let lang = localStorage.getItem('language');

		return this.http.post(this.API_URL + '/save-order?cart_id='+ cart_id + '&lang=' + lang, {}, this.getHeader() )
               .map(response => response.json() )
               .catch(error => {
			        //console.log(error);
			        return Observable.of<any>({
			        	status: false,
			        	message: 'Error while saving order'
			        });
			    });
	}

	processPayment( params ): Observable<any>{
		return this.http.post(this.API_URL + '/process-payment/', params, this.getHeader() )
               .map(response => response.json() )
               .catch(error => {
			        //console.log(error);
			        return Observable.of<any>({
			        	status: false,
			        	message: 'Error while processing payment'
			        });
			    });
	}

	getPage( id ): Observable<any>{

		let lang = localStorage.getItem('language');

		return this.http.get(this.API_URL + '/get-page/'+ id + "?lang="+ lang )
           .map(response => response.json() )
           .catch(error => {
		        //console.log(error);
		        return Observable.of<any>({
		        	status: false,
		        	message: 'Error while serving request'
		        });
		    });
	}

	contactUs( params ): Observable<any>{
		return this.http.post(this.API_URL + '/contact-us/', params )
           .map(response => response.json() )
           .catch(error => {
		        //console.log(error);
		        return Observable.of<any>({
		        	status: false,
		        	message: 'Error while sending request'
		        });
		    });
	}

	applyCoupon( params ): Observable<any>{

		params.cart_id = this.getCartId();

		return this.http.post(this.API_URL + '/apply-coupon/', params, this.getHeader() )
           .map(response => response.json() )
           .catch(error => {
		        //console.log(error);
		        return Observable.of<any>({
		        	status: false,
		        	message: 'Error while sending request'
		        });
		    });

	}

	removeCoupon(): Observable<any>{

		return this.http.post(this.API_URL + '/remove-coupon/', {cart_id : this.getCartId() }, this.getHeader() )
           .map(response => response.json() )
           .catch(error => {
		        //console.log(error);
		        return Observable.of<any>({
		        	status: false,
		        	message: 'Error while sending request'
		        });
		    });

	}

	searchServices( params ): Observable<any>{

		let area = '';
		let s = '';
		if(params.area !== undefined){
			area = params.area;
		}

		if(params.s !== undefined){
			s = params.s;
		}

		return this.http.get(this.API_URL + '/search/?area='+area+'&s='+s)
           .map(response => response.json() )
           .catch(error => {
		        //console.log(error);
		        return Observable.of<any>({
		        	status: false,
		        	message: 'Error while sending request'
		        });
		    });
	}

	getVendors(cat = 0,area = 0): Observable<any>{
		return this.http.get( this.API_URL + '/vendors?cat=' + cat + '&area=' + area )
           .map(response => response.json() )
           .catch(error => {
		        //console.log(error);
		        return Observable.of<any>({
		        	status: false,
		        	message: 'Error while serving request'
		        });
		    });
	}

	getByAuthor(id, cat = 0, area = 0): Observable<any>{
		return this.http.get(this.API_URL + '/author/' + id + '?cat=' + cat + '&area=' + area )
           .map(response => response.json() )
           .catch(error => {
		        //console.log(error);
		        return Observable.of<any>({
		        	status: false,
		        	message: 'Error while serving request'
		        });
		    });
	}

	assignCart(): Observable<any>{
		let cart_id = this.getCartId();

		return this.http.post(this.API_URL + '/assign-cart?cart_id='+ cart_id, {}, this.getHeader() )
           .map(response => response.json() )
           .catch(error => {
		        //console.log(error);
		        return Observable.of<any>({
		        	status: false,
		        	message: 'Error while updating cart'
		        });
		    });
	}

	availablePaymentMethods(order_id): Observable<any>{
		return this.http.get(this.API_URL + '/available-payment-methods/' + order_id )
           .map(response => response.json() )
           .catch(error => {
		        //console.log(error);
		        return Observable.of<any>({
		        	status: false,
		        	message: 'Error while serving request'
		        });
		    });
	}

	savePushToken(): Observable<any>{

		var _push_token = localStorage.getItem('push_token');

		let _params = { push_token: _push_token }

		//alert( JSON.stringify(_params) );

		//let _params = { push_token: 'token_goes_here' }

		return this.http.post(this.API_URL + '/save-push-token/', _params, this.getHeader() )
           .map(response => response.json() )
           .catch(error => {
		        //console.log(error);
		        return Observable.of<any>({
		        	status: false,
		        	message: 'Error while saving token'
		        });
		    });
	}

	getDeals(): Observable<any>{

		let lang = localStorage.getItem('language');

		return this.http.get(this.API_URL + '/get-deals/' )
           .map(response => response.json() )
           .catch(error => {
		        //console.log(error);
		        return Observable.of<any>({
		        	status: false,
		        	message: 'Error while serving request'
		        });
		    });
	}

	activateDeal(deal_id): Observable<any>{

		let cart_id = localStorage.getItem('cart_id');
		let _params = { deal_id: deal_id, cart_id: cart_id }

		return this.http.post(this.API_URL + '/apply-deal/', _params, this.getHeader() )
           .map(response => response.json() )
           .catch(error => {
		        //console.log(error);
		        return Observable.of<any>({
		        	status: false,
		        	message: 'Error while saving token'
		        });
		    });
	}

	celebrityLogin(passcode): Observable<any>{

		let _params = { passcode: passcode }
		return this.http.post( this.API_URL + '/celebrity-login/', _params )
			.map(response => response.json() )
			.catch(error => {
				//console.log(error);
				return Observable.of<any>({
					status: false,
					message: 'Error while loggin in'
				});
			});
	}

	saveCelebirityServices(params): Observable<any>{
		return this.http.post( this.API_URL + '/celebrity/service/save', params )
			.map( response => response.json() )
			.catch( error => {

				return Observable.of<any>({
		        	status: false,
		        	message: 'Error while saving data'
		        });

			} )
	}

	getCelebrityServicesByCategory(cat_id): Observable<any>{
		return this.http.get( this.API_URL + '/celebrity/service/category/' + cat_id )
			.map( response => response.json() )
			.catch( error =>  {
				return Observable.of<any>( {
					status: false,
					message: 'Error while fetching results'
				} )
			}) 
	}

	getCelebrities(): Observable<any>{
		return this.http.get( this.API_URL + '/celebrities/' )
			.map( response => response.json() )
			.catch( error =>  {
				return Observable.of<any>( {
					status: false,
					message: 'Error while fetching results'
				} )
			}) 
	}

	getCelebrityCategories(id): Observable<any>{
		return this.http.get( this.API_URL + '/celebrity/categories/'+id )
			.map( response => response.json() )
			.catch( error =>  {
				return Observable.of<any>( {
					status: false,
					message: 'Error while fetching results'
				} )
			}) 
	}

	getCelebrityServices(celebrity_id, category_id): Observable<any>{
		return this.http.get( this.API_URL + '/celebrity/items/?category_id='+category_id + '&celebrity_id=' + celebrity_id )
			.map( response => response.json() )
			.catch( error =>  {
				return Observable.of<any>( {
					status: false,
					message: 'Error while fetching results'
				} )
			}) 
	}

	//Error Handler
	private handleError(error: any): Promise<any> {

	    return Promise.reject(error.message || error);
	}
}
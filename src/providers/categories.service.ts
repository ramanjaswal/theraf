import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { API_BASE } from '../config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoriesService {

	//private headers = new Headers({'Content-Type': 'application/json'});
	private API_URL = API_BASE + 'eventos/v1';  // URL to web api

	constructor(private http: Http) { }

	getCategories(): Promise<any[]> {

		return this.http.get(this.API_URL + '/categories')
               .toPromise()
               .then(response => response.json() )
               .catch(this.handleError);

	}

	private handleError(error: any): Promise<any> {
	    console.error('An error occurred', error); // for demo purposes only
	    return Promise.reject(error.message || error);
	}

}
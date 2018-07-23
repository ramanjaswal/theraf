import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { API_BASE } from '../config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

	//private headers = new Headers({'Content-Type': 'application/json'});
	private API_URL = API_BASE ;  // URL to web api

	constructor(private http: Http) { }

	login( params ): Promise<any>{
		return this.http.post(this.API_URL + 'jwt-auth/v1/token', params)
               .toPromise()
               .then(response => response.json() )
               .catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
	    return Promise.reject(error.message || error);
	}

}
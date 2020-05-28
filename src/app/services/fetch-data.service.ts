import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 

@Injectable({
	providedIn: 'root'
})
export class FetchDataService {

	constructor( ) {}

	fetchData(path, callback){
		return fetch(path)
		.then((result) => {
			return result.json();
		})
		.then((result) => {
			callback(result);
		})
		.catch((error) => {
			console.error(error);
		});
	}
}

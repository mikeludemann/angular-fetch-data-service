import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core';
import { FetchDataService } from './../../services/fetch-data.service';

@Component({
	//encapsulation: ViewEncapsulation.None,
	selector: 'dataFetch',
	templateUrl: './data-source.component.html',
	styleUrls: ['./data-source.component.css']
})
export class DataSourceComponent implements OnInit {

	@Input() ngStyle: { [key: string]: string; }

	//@Input() elementId: string;

	@ViewChild('dfs', {static: false}) el: ElementRef;

	constructor(private fdService: FetchDataService) { }

	ngOnInit(): void {
		var elem = document.getElementById("data-fetch");

		this.fdService.fetchData('https://swapi.dev/api/people/', function(data){
			for(var i = 0; i < data.results.length; i++){
				elem.innerHTML += data.results[i].name + "<br/>";
			}
		});
	}

}

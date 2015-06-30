/**
 * Created by Peter Kassenaar on 30-6-2015.
 * Credits: http://geek.bluemangointeractive.com/where-have-my-factories-services-constants-and-values-gone-in-angular-2/
 */
'use strict';
export class WeatherService {
	getWeather(city){
		let url = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}`; // Let op de backticks en ES6 string interpolation
		return fetch(url).then(function(response){
			return response;
		})

	}
}
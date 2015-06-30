import {Component, Template, bootstrap} from 'angular2/angular2';
import {WeatherService} from 'weather';

// Annotation section
@Component({
    selector: 'weather-app',
	//appInjector:[WeatherService]
	injectables: [WeatherService]
})
@Template({
    url : 'template_weather.html'
})
// Component controller
class WeatherAppComponent {

	// local vars
	city:string;
	weather: WeatherService;
	currentWeather: Array<Object>;

	// constructor
    constructor(w:WeatherService) {
        this.weather = w;
    }

	// event handler from template/UI
	searchWeather(city){
		this.weather.getWeather(city).then((data)=>{
			this.currentWeather = data.data;
		})
	}
}

bootstrap(WeatherAppComponent);
import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'weather',
    templateUrl: './weather.component.html'
})
export class WeatherComponent {
    public weather: Weather;

    constructor(http: Http) {
        http.get('/api/weather/city/Hobro').subscribe(result => {
            this.weather = result.json();
            console.log(this.weather);
        });
    }
}

interface Weather {
    temp: number;
    summary: string;
    city: string;
}
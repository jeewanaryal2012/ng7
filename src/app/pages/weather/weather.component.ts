import { Component, OnInit } from "@angular/core";

import { IWeather } from "../../interfaces/weather";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.scss"]
})
export class WeatherComponent implements OnInit {
  weather: IWeather;
  constructor() {
    this.weather = {
      city: "Irving",
      country: "USA",
      date: new Date(),
      image: "assets/img/sunny.svg",
      description: "sunny"
    } as IWeather;
  }

  ngOnInit() {}
}

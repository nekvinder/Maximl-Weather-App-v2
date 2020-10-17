import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { interval, Subscription } from "rxjs";

import { WeatherService } from "../weather.service";

@Component({
  selector: "app-weather-unit",
  templateUrl: "./weather-unit.component.html",
  styleUrls: ["./weather-unit.component.css"]
})
export class WeatherUnitComponent implements OnInit {
  @Input() id;
  city = "";
  iserror: boolean = false;
  data: any;
  imagedata = "";

  constructor(private weatherService: WeatherService) {}

  loadData() {
    if (this.city.length > 0) {
      this.weatherService
        .getWeather(this.city)
        .toPromise()
        .then(t => {
          this.data = t;
          this.imagedata = this.weatherService.getImageUrl(
            t["weather"][0]["id"]
          );
          localStorage.setItem("data" + this.id, JSON.stringify(t));
          console.log(t);
        })
        .catch(e => {
          this.iserror = true;
          console.log(e);
        });
    }
  }

  edit() {
    this.city = "";
    localStorage.removeItem("data" + this.id);
    this.data = null;
  }

  ngOnInit() {
    setInterval(() => {
      this.loadData();
    }, 30000);
    let tmp = JSON.parse(localStorage.getItem("data" + this.id));
    if (tmp) {
      this.data = tmp;
      this.imagedata = this.weatherService.getImageUrl(tmp["weather"][0]["id"]);
    }
  }
}

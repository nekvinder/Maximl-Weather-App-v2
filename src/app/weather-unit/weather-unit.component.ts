import { Component, Input, OnInit } from "@angular/core";
import { WeatherService } from "../weather.service";

@Component({
  selector: "app-weather-unit",
  templateUrl: "./weather-unit.component.html",
  styleUrls: ["./weather-unit.component.css"]
})
export class WeatherUnitComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  @Input() id;
  city = "";
  iserror: boolean = false;
  data: any;
  imagedata = "";
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
          console.log(t);
        })
        .catch(e => {
          this.iserror = true;
        });
    }
  }

  edit() {
    this.city = "";
    this.data = null;
  }

  getReport() {
    this.loadData();
  }

  ngOnInit() {
    this.loadData();
    alert(this.id);
  }
}

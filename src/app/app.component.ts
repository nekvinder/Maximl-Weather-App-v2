import { Component, VERSION } from "@angular/core";
import { WeatherService } from "./weather.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular a" + VERSION.major;
  constructor(private weatherService: WeatherService) {}
}

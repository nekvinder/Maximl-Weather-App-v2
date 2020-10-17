import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { WeatherUnitComponent } from "./weather-unit/weather-unit.component";
import { WeatherService } from "./weather.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, WeatherUnitComponent],
  bootstrap: [AppComponent],
  providers: [WeatherService]
})
export class AppModule {}

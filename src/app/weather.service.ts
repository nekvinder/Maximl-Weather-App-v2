import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<Object> {
    return this.http.get(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=335495b6bada2ad5c3fcff8274a51aef"
    );
  }

  getImageUrl(weatherCode: number): string {
    let path = "";
    path =
      "https://s-media-cache-ak0.pinimg.com/564x/cf/1e/c4/cf1ec4b0c96e59657a46867a91bb0d1e.jpg"; //default
    if (weatherCode >= 200 && weatherCode < 300) {
      path =
        "https://static01.nyt.com/images/2020/02/06/climate/06CLI-LIGHTNING/06CLI-LIGHTNING-superJumbo.jpg"; //thunderstorm
    } else if (weatherCode >= 300 && weatherCode < 400) {
      path =
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201707/drizzle-647_072717054006.jpg"; //drizzle
    } else if (weatherCode >= 500 && weatherCode < 600) {
      path =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdApjDKKHruksZg3V2WtOdRpuQ4mlBenPCaA&usqp=CAU"; //rain
    } else if (weatherCode >= 600 && weatherCode < 700) {
      path =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqPJKEcTGif8OzLcG_DPOIKQ-sM5iz-8tr-w&usqp=CAU"; //snow
    } else if (weatherCode == 800) {
      path =
        "https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"; //clear sky
    } else if (weatherCode > 800) {
      path =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMR8H6-kyj-0QMLfD694rQoQDJ2GWDbFp6ew&usqp=CAU"; //clouds
    } else if (weatherCode >= 700 && weatherCode < 800) {
      path =
        "https://images.news18.com/ibnlive/uploads/2020/05/1588853407_untitled-design-2020-05-07t173959.699.jpg"; //sandstorm
    }
    return path;
  }
}

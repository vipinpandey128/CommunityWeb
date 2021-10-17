import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AboutUs } from "../model/aboutus";

@Injectable({
  providedIn: "root",
})
export class AboutusService {
  private apiUrl = environment.apiEndpoint + "/api/AboutUs/";
  constructor(private http: HttpClient) {}

  SaveAboutUs(data:any) {
    return this.http.post<any>(this.apiUrl,data);
  }
  GetAboutUs() {
    return this.http.get<AboutUs>(this.apiUrl);
  }
}

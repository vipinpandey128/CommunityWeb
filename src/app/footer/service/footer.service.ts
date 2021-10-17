import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class FooterService {
  private apiUrl = environment.apiEndpoint + "/api/HeaderInfo/";
  constructor(private http: HttpClient) {}

  SaveFooter(footerData: any) {
    return this.http.post<any>(this.apiUrl, footerData);
  }

  GetFooter() {
    return this.http.get<any>(this.apiUrl);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Social } from '../model/Social';

@Injectable({
  providedIn: 'root'
})
export class SocialService {
  private apiUrl = environment.apiEndpoint + "/api/Social/";
constructor(private http:HttpClient) { }

SaveSocialLink(social:any)
{
  return this.http.post<any>(this.apiUrl,social);
}
GetSocialLink()
{
  return this.http.get<Social[]>(this.apiUrl);
}

}

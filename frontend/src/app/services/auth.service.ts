import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private env: String;

  constructor(private http: HttpClient) { 
    this.env = environment.APP_URL;
  }
  registerUser(user: any){
    return this.http.post(this.env + "user/registerUser", user)
  }
}

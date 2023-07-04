import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
}) export class AuthService {
  private _baseUrl = `https://frontend-take-home-service.fetch.com`;

  constructor(private httpClient: HttpClient) { }

  public login({ name, email }: { name: string; email: string }) {
    return this.httpClient.post(`${this._baseUrl}/auth/login`, { name, email }, { responseType: 'text' });
  };

  public logout() {
    return this.httpClient.post(`${this._baseUrl}/auth/logout`, {}, { responseType: 'text' });
  }
}
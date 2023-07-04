import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, switchMap } from "rxjs";
import { Dog } from "../models/dog";
import { LocationSearchResponse, Match, DogSearchResponse, DogSearchQueryParams } from "../models/search";
import { Location } from "../models/location";

@Injectable({
  providedIn: 'root'
}) export class SearchService {

  private _baseUrl = `https://frontend-take-home-service.fetch.com`;

  constructor(private httpClient: HttpClient) { }

  public getDogBreeds(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${this._baseUrl}/dogs/breeds`);
  }

  public search(params: DogSearchQueryParams = {}): Observable<DogSearchResponse> {
    const queryParams = new HttpParams({ fromObject: { ...params } });
    return this.httpClient.get<DogSearchResponse>(`${this._baseUrl}/dogs/search`, { params: queryParams });
  }

  public getDogsByIds(ids: string[]): Observable<Dog[]> {
    return this.httpClient.post<Dog[]>(`${this._baseUrl}/dogs`, ids);
  }

  public match(ids: string[]): Observable<Match> {
    return this.httpClient.post<Match>(`${this._baseUrl}/dogs/match`, ids);
  }

  public getLocationsByZipCodes(zipCodes: number[]): Observable<Location[]> {
    return this.httpClient.post<Location[]>(`${this._baseUrl}/locations`, zipCodes);
  }

  public searchLocations(): Observable<LocationSearchResponse> {
    return this.httpClient.post<LocationSearchResponse>(`${this._baseUrl}/locations/search`, {});
  }

  public searchForDogs(params: DogSearchQueryParams) {
    return this.search(params).pipe(
      switchMap((searchResponse) => this.getDogsByIds(searchResponse.resultIds).pipe(
        map((dogsResponse => ({ ...searchResponse, dogs: dogsResponse })))
      ))
    );
  }
}
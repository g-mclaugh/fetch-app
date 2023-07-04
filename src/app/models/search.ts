import { Location } from "./location";

export interface DogSearchResponse {
  resultIds: string[];
  total: number;
  next: string;
  prev: string;
}

export interface DogSearchQueryParams {
  breeds?: string[];
  zipCodes?: number[];
  ageMin?: number;
  ageMax?: number;
  size?: number;
  from?: number;
  sort?: string;
}

export interface Match {
  match: string;
}

export interface LocationSearchResponse {
  results: Location[];
  total: number;
}
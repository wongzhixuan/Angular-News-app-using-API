import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY : string = "J8GiBHZrtjqXnMb0z1TKO6wwEotJdc8FQuPRmEYi";
  
  constructor(private httpClient: HttpClient) { }
  getNews() {
    return this.httpClient.get<any>(`https://api.thenewsapi.com/v1/news/top?api_token=${this.API_KEY}`);
  }
}

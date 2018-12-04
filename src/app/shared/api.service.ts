import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  private http: HttpClient;
  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }

  getData<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }
}

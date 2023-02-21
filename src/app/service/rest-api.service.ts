import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  constructor(private httpClient: HttpClient) {
    console.log('RestApiService constructor');
  }

  test() {
    console.log('RestApiService test');
  }

  get(url: string, options: any): Observable<any> {
    return this.httpClient.get<any>(url, options);
  }

  post(url: string, body: any, options: any): Observable<any> {
    return this.httpClient.post<any>(url, body, options);
  }

  put(url: string, body: any, options: any): Observable<any> {
    return this.httpClient.put<any>(url, body, options);
  }

  patch(url: string, body: any, options: any): Observable<any> {
    return this.httpClient.patch<any>(url, body, options);
  }

  delete(url: string, options: any): Observable<any> {
    return this.httpClient.delete<any>(url, options);
  }
}

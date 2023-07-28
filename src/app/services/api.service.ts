import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'http://localhost:3000/api/v1'
  constructor(private httpClient: HttpClient) { }

  getTasks() : Observable<any> {
    return this.httpClient.get<any>(`${this.url}/tasks`)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://localhost:8000/api/';

  constructor(private http: HttpClient) {}
  healthCheck() {
    return this.http.get<{ status: string }>(this.baseUrl + 'health-check/');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FrameworkService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllFrameworks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/framework`);
  }
}

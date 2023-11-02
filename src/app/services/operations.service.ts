import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OperationsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getOperation(url: string): Observable<Object> {
    return this.http.get(this.apiUrl + url);
  }
}

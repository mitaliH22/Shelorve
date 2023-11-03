import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OperationsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getOperation(url: string): Observable<Object> {
    return this.http.get(this.apiUrl + url);
  }

  createCompany(data: any) {
    return this.http.post(`${this.apiUrl}/organization`, data)
  }

  addUser(data: any) {
    return this.http.post(`${this.apiUrl}/user`, data);
  }

  edituser(data: any) {
    return this.http.put(`${this.apiUrl}/user`, data)
  }

  deleteUser(id: any){
    return this.http.delete(`${this.apiUrl}/user/${id}`)
  }

  addDomain(data: any) {
    return this.http.post(`${this.apiUrl}/domain`, data);
  }

  editDomain(data: any) {
    return this.http.put(`${this.apiUrl}/domain`, data);
  }

  addControls(data: any) {
    return this.http.post(`${this.apiUrl}/control`, data);
  }
}

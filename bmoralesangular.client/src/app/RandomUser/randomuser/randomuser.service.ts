import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RandomuserService {

  private apiURL = 'https://randomuser.me/api/';
  constructor(private http: HttpClient) { }

  getRandomUser(): Observable<any> {
    return this.http.get(this.apiURL);
  }
}

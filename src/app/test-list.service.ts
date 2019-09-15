import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestListService {

  private serverData = JSON;
  private testUrl = 'http://127.0.0.1:8000/test';  // URL to web api

  constructor( private http: HttpClient ) { }

  getAllTests(): Observable<any[]> {
    return this.http.get<any[]>(`${this.testUrl}/all/`);
  }
}
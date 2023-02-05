import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/config';
import { RequestData } from '../model/requestData';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebhookserviceService {

  constructor(private http: HttpClient) { }


  create(requestData: RequestData): Observable<RequestData> {
    return this.http.post<RequestData>(`${API_CONFIG.baseUrl}/plans/pix/requestData`, requestData);
    }
  
}


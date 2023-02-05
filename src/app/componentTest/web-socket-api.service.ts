import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketAPIService {
  

  constructor() { }

  public connect() {
    let socket = new SockJS('http://localhost:8081/ws');
    let stompClient = Stomp.over(socket);
    return stompClient;
  }
}

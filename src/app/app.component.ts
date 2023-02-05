import { Component } from '@angular/core';
import { webSocket } from "rxjs/webSocket";
import { WebSocketAPIService } from './componentTest/web-socket-api.service';
import { RequestData } from './model/requestData';
import { WebhookserviceService } from './services/webhookservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'websockettest';

  public status = 0;

  constructor(private webSocketAPI: WebSocketAPIService) { 
    let stompClient = this.webSocketAPI.connect();
    stompClient.connect({}, frame => {

      stompClient.subscribe('/topic/response', status => {

        this.status = JSON.parse(status.body);
      })
    });
  }

  
  
}

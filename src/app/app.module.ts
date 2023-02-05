import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StompService } from '@stomp/ng2-stompjs';

import { AppComponent } from './app.component';
import { WebSocketAPIService } from './componentTest/web-socket-api.service';
import { WebsocketComponentComponent } from './componentTest/websocket-component/websocket-component.component';

@NgModule({
  declarations: [
    AppComponent,
    WebsocketComponentComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
  ],
  providers: [WebSocketAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StompService } from '@stomp/ng2-stompjs';
import { Message } from '@stomp/stompjs';
import { RequestData } from 'src/app/model/requestData';
import { WebhookserviceService } from 'src/app/services/webhookservice.service';
import { WebSocketAPIService } from '../web-socket-api.service';

@Component({
  selector: 'app-websocket-component',
  templateUrl: './websocket-component.component.html',
  styleUrls: ['./websocket-component.component.css']
})
export class WebsocketComponentComponent implements OnInit {

  response: string = "";
  
  constructor(private webSocketAPI: WebSocketAPIService, private webHookService: WebhookserviceService, private http: HttpClient) { }

  plano: object = {
    "id": 2,
    "name": "PREMIUM 60 DIAS",
    "description": "TENHA PREMIUM POR 60 DIAS!\nACESSO A DOWNLOADS ILIMITADOS!\nAPLICATIVO SEM ANUNCIOS!\nUSE O PROXIMO EPISODIO ILIMITADOS!",
    "price": "20",
    "billet_price": "21",
    "pix_price": "16",
    "normal_picture_url": "https://cdn.discordapp.com/attachments/802289906138742854/802606190684012544/PA-PREMIUM-BOT1.png",
    "billet_picture_url": "https://media.discordapp.net/attachments/802289906138742854/802606128701636608/PA-DISCORD-V1.png",
    "pix_picture_url": "https://media.discordapp.net/attachments/802289906138742854/802606128701636608/PA-DISCORD-V1.png",
    "stripe_plan_id": "prod_Ia2TPg2Lc3KbCN",
    "stripe_price_id": "price_1HysO8H8gWWK4yl2FCkmLfSy",
    "pack_duration": "60",
    "created_at": "2021-02-10T22:02:11.000000Z",
    "updated_at": "2021-02-10T22:08:18.000000Z"
  }

  requestData: RequestData = {
    email: "luannbr005@gmail.com",
    cpf: "715.927.184-00",
    plano: this.plano
  }

  ngOnInit() {
  
  }


  public criaWebHook(): void {
    console.log("passou");
    this.webHookService.create(this.requestData).subscribe(response => {
      console.log(response);
    });
  }
  

}

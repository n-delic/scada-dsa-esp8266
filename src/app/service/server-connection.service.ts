import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {webSocket} from 'rxjs/webSocket';
@Injectable({
  providedIn: 'root'
})
export class ServerConnectionService {

  constructor() { }

  getWebSocket() : Subject<any> {
    return webSocket('wss://nakii.tech:8081');
  }
}

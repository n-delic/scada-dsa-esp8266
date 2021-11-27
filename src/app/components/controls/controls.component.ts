import { Component,  OnDestroy,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGaugeType } from 'ngx-gauge/gauge/gauge';
import { ServerConnectionService } from 'src/app/service/server-connection.service';
import { SensorData } from '../../models/sensordata.model';
import {
  Location
} from '@angular/common';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit, OnDestroy {
  //
  currentRoom!: string;
  wsClient!: Subject<any>;

  //VALUES
  roomTemp: number = 0;
  trackSensor: number = 0;
  ultraSonicSensor: number = 0;
  humiditySensor: number = 0;

  isReading: boolean = true;
  // GAUGE SETTINGS //
  gaugeType: NgxGaugeType = "semi";
  thresholdConfig = {
    '-20': { color: 'blue' },
    '25': { color: 'orange' },
    '32': { color: 'red' }
  };

  constructor(private location: Location, private activatedRoute: ActivatedRoute, private backend: ServerConnectionService) { }

  ngOnInit(): void {
    this.wsClient = this.backend.getWebSocket();

    this.activatedRoute.url.subscribe({
      next: (value) => {
        this.currentRoom = value[0].path;
      }
    }).unsubscribe();
    this.wsClient.subscribe((value: any) => {
      let data = this.parseMessage(value.message);
      this.setData(data.sensor,data.data);
      this.isReading = false;
    }
    );
    
  }

  ngOnDestroy() {
    this.wsClient.unsubscribe();
  }

  sendToESP(actuator: string, data: number) : void {
    let message = actuator + '#' + data;
    this.wsClient.next({id:0,message:message});
  }

  setData(sensor: string, value: number) {
    switch(sensor) {
      case 'TER':
        this.roomTemp = value;
        break;
      case 'ULS':
        this.ultraSonicSensor = value;
        break;
      case 'HUM':
        this.humiditySensor = value;
        break;
      case 'TRC':
        this.trackSensor = value;
        break;
    }
  }

  parseMessage(message: string): SensorData {
    let parsed = message.split('#');
    return {
      sensor: parsed[0],
      data: parseInt(parsed[1])
    };
  }

}

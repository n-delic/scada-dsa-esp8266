import { Component, OnInit } from '@angular/core';
import { TuiDay, TUI_DEFAULT_STRINGIFY } from '@taiga-ui/cdk';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dayPoints = Array.from({length: 12}, (_, i) => [
    new TuiDay(2020, 4, 1).append({day: i * 30}),
    Math.floor(Math.random() * 100)
]);

readonly stringify = TUI_DEFAULT_STRINGIFY;

  constructor() { }

  ngOnInit(): void {
  }

}

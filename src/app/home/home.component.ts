import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isActivated: boolean = false;
  form:FormGroup = new FormGroup({
    valid: new FormControl('')
  }) 

  constructor() { }

  ngOnInit(): void {
  }

  provjeri() {
    if(this.form.controls['valid'].value === "jakpasswordbgm") {
      this.isActivated=true;
      return;
    } else {
      return;
    }
  }

}

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
    if(localStorage.getItem('isActivated') === 'true') {
      this.isActivated = true;
    }
  }

  provjeri() {
    if(this.form.controls['valid'].value === "jakpasswordbgm") {
      this.isActivated=true;
      localStorage.setItem('isActivated','true');
      return;
    } else {
      return;
    }
  }

}

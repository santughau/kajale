import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerData = {
    fullName: '',
    mobile: '',
    email: '',
    tal: '',
    district: '',
    school: '',
    password: '',
    gender: '',
    uid: '',
  };
  constructor() {}

  ngOnInit() {}

  OnDistrictChange(ev) {}
}

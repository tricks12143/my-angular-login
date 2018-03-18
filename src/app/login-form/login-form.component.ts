import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router:Router, private user:UserService) { }

  ngOnInit() {
  }

  loginUser(e){
  	e.preventDefault();

    var bcrypt = require('bcryptjs');
    const saltRounds = 10;

    const depass = "PasswordHardcoded532";

    var hash = bcrypt.hashSync(depass, saltRounds);

  	var password = e.target.elements[0].value;

    var compass = false;

    compass = bcrypt.compareSync(password, hash);

  	if(compass){
  		this.user.setUserLoggedIn();
  		this.router.navigate(['dashboard']);
  	}
  }

}

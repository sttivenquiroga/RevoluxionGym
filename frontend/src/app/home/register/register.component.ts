import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public registerData: any;
  public successMessage: String;
  public errorMessage: String;

  constructor(private auth: AuthService, private router: Router) {
    this.registerData = {};
    this.successMessage = '';
    this.errorMessage = '';
  }

  ngOnInit(): void {}
  registerUser() {    
    if (
      !this.registerData.documentTypeId ||
      !this.registerData.numberDocument ||
      !this.registerData.firstName ||
      !this.registerData.lastName ||
      !this.registerData.email ||
      !this.registerData.user ||
      !this.registerData.password ||
      !this.registerData.phone
    ) {
      this.errorMessage = 'Process failed: Incomplete Data';
      this.clearAlert();
    } else {   
      this.auth.registerUser(this.registerData).subscribe(
        (res) => {
          console.log(res);          
          this.successMessage = 'Register User: Sucessful';
          this.clearAlert();
          this.registerData = {};
        },
        (err) => {
          console.log(err);
          this.errorMessage = err.error;
          this.clearAlert();
          this.registerData = {};
        }
      );
    }
  }
  clearAlert() {
    setTimeout(() => {
      this.successMessage = '';
      this.errorMessage = '';
    }, 2000);
  }
}

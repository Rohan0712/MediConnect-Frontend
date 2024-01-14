import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from '../toaster.service.service';
import { CustomService } from 'src/app/services/custom-data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Support } from '../support-page/support.model';
import { User } from './user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  username!: string;
  password!: string; 
  email!:string;
  phone!:string;
  address!:string;
  firstName!:string;
  lastName!:string;
  constructor(private router: Router,private toastr: ToasterService,private customService: CustomService,public http: HttpClient ,private formBuilder: FormBuilder) { }
  ngOnInit(): void {
     this.setFlag(false);
  }
  
  setFlag(flag: boolean) {
    this.customService.flag = flag;
  }

  private apiUrl = 'http://localhost:8080/api/registration';
  onSubmit() {
          const user: User ={
            "userID" : this.username,
            "firstName" : this.firstName,
            "lastName" : this.lastName,
            "email" : this.email,  
            "phone" : this.phone,
            "password" : this.password,
            "address" : this.address,
            "accountVerification" : false
        }
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        const requestOptions: Object = {
        /* other options here */
        responseType: 'text'
        }
        this.http.post<any>(this.apiUrl, user,requestOptions).subscribe(
        response => {
        // console.log('Post request successful:', response);
        this.toastr.success("Please verify the user link sent to email id",response)
        },
        error => {
        this.toastr.error(error.error,"User not Registered")
        }
        );
        // this.username='';
        // this.firstName='';
        // this.lastName='';
        // this.email='';
        // this.phone='';
        // this.password='';
        // this.address='';

  }

  isModalVisible = false;

  openModal(): void {
    this.isModalVisible = true;
  }

  onCloseModal(): void {
    this.isModalVisible = false;
  }
}

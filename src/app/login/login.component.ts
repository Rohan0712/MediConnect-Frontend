import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from '../toaster.service.service';
import { CustomService } from 'src/app/services/custom-data.service';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../doctor/doctor.model';
import { User } from '../sign-up/user.model';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username!: string;
  password!: string;
  user: User | any;
  link!: string;
  constructor(private router: Router,private toastr: ToasterService,private customService: CustomService,private http: HttpClient,private userService: UserServiceService) { }
  ngOnInit(): void {
     this.setFlag(false);
  }
  setFlag(flag: boolean) {
    this.customService.flag = flag;
  }
  private apiUrl = "http://localhost:8080/api/user";

  onSubmit() {
    // Implement your login logic here (e.g., sending a request to a server).
    // For this example, we'll just log the values.
    // this.isModalVisible = true;
    this.link = `${this.apiUrl}/${this.username}`;
    this.http.get<User>(this.link).subscribe((user) => {
      this.user = user
      if(this.user.email == undefined){
        this.toastr.error('Try Again!!!','Invalid Credentials');
        this.username ='';
        this.password =''
      } else{
          if((this.username ==this.user.userID || this.username == this.user.email) && this.password ==this.user.password && 
          this.user.accountVerification){
          this.setFlag(true);
          this.userService.addUser(this.user);
          this.router.navigate(['/']);
          this.toastr.success('','Login Successfull');
        }else if(!this.user.accountVerification){
          this.toastr.error('Use Verification Link Sent in Email','Account not Verified');
          this.username ='';
          this.password ='';
        }else{
          // this.toastr.error('Invalid Credentials');
          this.toastr.error('Try Again!!!','Invalid Credentials');
          this.username ='';
          this.password ='';
        }
      }
    });   
  }
  
}
    
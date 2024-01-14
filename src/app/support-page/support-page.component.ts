import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToasterService } from '../toaster.service.service';
import { Support } from './support.model';
import { Router } from '@angular/router';
import { CustomService } from '../services/custom-data.service';

@Component({
  selector: 'app-support-page',
  templateUrl: './support-page.component.html',
  styleUrls: ['./support-page.component.css']
})
export class SupportPageComponent {
  supportForm: FormGroup;
  email! : string;
  name! : string ;
  message! : string;
  
  constructor(private toastr: ToasterService, public http: HttpClient ,private formBuilder: FormBuilder,private router: Router,public customService: CustomService) {
    this.supportForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  private apiUrl = 'http://localhost:8080/api/support';
  sendMessage(name1:string,email1:string,message1:string) {
    if(this.customService.flag == undefined || this.customService.flag==false){
      this.router.navigate(['/login']);
      this.toastr.info("Enter credentials","Please Login!!!")
    }else{
            const support: Support ={
                      "name" : name1,
                      "email" : email1,  
                      "message" : message1
            }
            const headers = new HttpHeaders();
            headers.append('Content-Type', 'application/json; charset=utf-8');
            const requestOptions: Object = {
              /* other options here */
              responseType: 'text'
            }
            this.http.post<any>(this.apiUrl, support,requestOptions).subscribe(
            response => {
              // console.log('Post request successful:', response);
              this.toastr.success(response,"Success")
              },
              error => {
                this.toastr.error(error.error,"Failed")
              }
              );
              this.name='';
              this.email='';
              this.message='';
          }
        } 
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from '../toaster.service.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent {
  supportForm: FormGroup;
  email! : string;
  name! : string ;
  message! : string;
  
  constructor(private toastr: ToasterService, public http: HttpClient ,private formBuilder: FormBuilder) {
    this.supportForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  private apiUrl = 'http://localhost:8080/api/support';
  sendMessage(name:string,email:string,message:string) {
      console.log('Form submitted:', name,email,message);
    const data = { name: name,
                  email : email,
                  message : message };
    this.http.post<any>(this.apiUrl, data).subscribe(
      (response) => {
        console.log('Post request successful:', response);
        this.toastr.success("Success",response.data)
      },
      (error) => {
        console.error('Error', error.data);
      }
    );
    this.name='';
    this.email='';
    this.message='';
  }
}

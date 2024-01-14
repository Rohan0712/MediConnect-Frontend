import { Injectable } from '@angular/core';
import { User } from './sign-up/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  user! : User;
  constructor() { }
  addUser(element: User) {
    this.user = element;
  }

  getUser(): User {
    return this.user;
  }
}

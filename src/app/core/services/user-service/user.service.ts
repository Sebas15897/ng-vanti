import { Injectable } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';
import { usersArray } from '../../models/users.models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  listUsers: IUser[] = usersArray;

  private userList = new BehaviorSubject<IUser[]>([]);
  userList$ = this.userList.asObservable();

  constructor() {}

  getUsersList() {
    return this.userList.next(this.listUsers);
  }
}
